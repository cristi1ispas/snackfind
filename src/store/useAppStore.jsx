import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
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

          const [prod, shop, shop_prod, discount] = responses;

          set({
            products/*Map*/: prod.data ? indexData(prod.data) : [],
            /*products: prod.data || [],*/
            shops: shop.data ? indexData(shop.data) : [],
            joints: shop_prod.data || [],
            discounts: discount.data || [],
          })
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
      }),
    }
  )
);