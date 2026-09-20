import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";
import { persist } from "zustand/middleware";

const emptyProfile = null;

function usernameToEmail(username) {
  const normalizedUsername = username.trim().toLowerCase();
  return `${normalizedUsername}@users.email.snackfind`;
}

function validateDiscount (valid_until, canceled_at) {
  const deviceTime = Date.now();

  if(canceled_at !== null) return false;

  if (valid_until !== null) {
    if(deviceTime > new Date(valid_until).getTime()) return false;
  }
  return true;
}

export const useAppStore = create(
  persist(
    (set, get) => ({
      products: [],
      productsMap: [],
      shops: [],
      joints: [],
      discounts: [],

      isLoading: false,

      searchValue: '',
      selectedCategories: [],
      productPageProd: [1, [], []],
      isProductPageOpen: false,

      setSearchValue: (value) => set({ searchValue: value }),
      setSelectedCategories: (categories) => set({ selectedCategories: categories }),
      setProductPageProd: ([ prod, joints, discounts ]) => set({
        productPageProd: [ prod, joints, discounts ],
        isProductPageOpen: true,
      }),
			closeProductPage: () => set({ isProductPageOpen: false }),

      session: null,
      profile: null,
      authLoading: true,
      authError: null,

      fetchProfile: async () => {
        const currentSession = get().session;

        if (!currentSession?.user) {
          set({ profile: null });
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("id, username, score, rank")
          .eq("id", currentSession.user.id)
          .single();

        if (error) {
          console.error("Could not fetch profile:", error);
          set({ profile: null });
          return;
        }

        set({ profile: data });
      },

      initializeAuth: async () => {
        set({ authLoading: true });

        const {
          data: { session },
        } = await supabase.auth.getSession();

        set({ session });

        if (session) {
          await get().fetchProfile();
        }

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, newSession) => {
          set({ session: newSession });

          if (newSession) {
            setTimeout(() => {
              get().fetchProfile();
            }, 10);
          } else {
            set({ profile: null });
          }
        });

        set({ authLoading: false });

        return () => {
          subscription.unsubscribe();
        };
      },

      signUp: async (username, password, inviteCode) => {
        set({
          authError: null,
          authLoading: true,
        });

        const cleanUsername = username.trim();
        const cleanInviteCode = inviteCode.trim();

        if (!cleanUsername || !password || !cleanInviteCode) {
          const error = new Error(
            "Username, password, and invite code are required."
          );

          set({
            authError: error.message,
            authLoading: false,
          });

          throw error;
        }

        const email = usernameToEmail(cleanUsername);

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: cleanUsername,
              invite_code: cleanInviteCode.toUpperCase(),
            },
          },
        });

        if (error) {
          set({
            authError: error.message,
            authLoading: false,
          });

          throw error;
        }

        set({
          session: data.session,
          authLoading: false,
        });

        if (data.session) {
          await get().fetchProfile();
        }

        return data;
      },

      signIn: async (username, password) => {
        set({ authError: null, authLoading: true });

        const email = usernameToEmail(username);

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          set({
            authError: error.message,
            authLoading: false,
          });

          throw error;
        }

        set({
          session: data.session,
          authLoading: false,
        });

        await get().fetchProfile();
      },

      signOut: async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
          throw error;
        }

        set({
          session: null,
          profile: null,
          authError: null,
        });
      },
      // Call with `await <function>(<param>,<param>);`

      updateShopProductPrice: async (shopId, prodId, newPrice, source) => {
        const numericPrice = Number(newPrice);

        if (!Number.isFinite(numericPrice)) {
          throw new Error("Price must be a valid number.");
        }

        const { data, error } = await supabase.rpc(
          "update_shop_product_price",
          {
            p_shop_id: shopId,
            p_prod_id: prodId,
            p_new_price: numericPrice,
            p_source: source,
          }
        );

        if (error) {
          throw error;
        }

        await get().fetchSupabaseData();
        await get().fetchProfile();

        return data;
      },

      fetchSupabaseData: async () => {

        if (!navigator.onLine) {
          console.log("App offline, loading cached data.");
          return;
        }

        set({ isLoading: true });
        try {
          const responses = await Promise.all([
            supabase.from('prod').select().order('created_at', {ascending: false}),
            supabase.from('shop').select(),
            supabase.from('shop_prod').select(),
            supabase.from('discount').select(),
          ]);

          const failedResponse = responses.find(response => response.error);
          if (failedResponse) {
            throw new Error(`failed response supabase: ${JSON.stringify(failedResponse.error)}`);
          }

          const indexData = (data) =>
            data ? data.reduce((acc, item) => {
              acc[item.id] = item;
              return acc;
            }, {})
            : {};

          const [prod, shop, shop_prod, discountRaw] = responses;
          const discountData = discountRaw.data || [];

          const activeDiscounts = discountData.filter(row => 
            validateDiscount(row.valid_until, row.canceled_at)
          );

          set({
            products/*Map*/: prod.data ? indexData(prod.data) : [],
            /*products: prod.data || [],*/
            shops: shop.data ? indexData(shop.data) : [],
            joints: shop_prod.data || [],
            discounts: activeDiscounts,
            discountsHistory: discountData,
          });
        } catch (error) {
          console.error('FATAL network.', error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'appDatabaseStorage',
      partialize: (state) => ({
        products: state.products,
        shops: state.shops,
        joints: state.joints,
        discounts: state.discounts,
        discountsHistory: state.discountsHistory,
        isLoading: state.isLoading,
      }),
    }
  )
);