import { useState } from "react";
import { useAppStore } from "../store/useAppStore";

export default function SignUpFormTest() {
  const signUp = useAppStore((state) => state.signUp);
  const authLoading = useAppStore((state) => state.authLoading);
  const authError = useAppStore((state) => state.authError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");

    try {
      const data = await signUp(
        username,
        password,
        inviteCode
      );

      if (!data.session) {
        setSuccessMessage(
          "Account created. Check your email to confirm your account."
        );
      } else {
        setSuccessMessage("Account created successfully.");
      }
    } catch (error) {
      // The store already saved the error.
      console.error("Signup failed:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="signUpFormTest">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Invite code"
        value={inviteCode}
        onChange={(event) => setInviteCode(event.target.value)}
        required
      />

      <button type="submit" disabled={authLoading}>
        {authLoading ? "Creating account..." : "Sign up"}
      </button>

      {authError && (
        <p style={{ color: "red" }}>
          {authError}
        </p>
      )}

      {successMessage && (
        <p style={{ color: "green" }}>
          {successMessage}
        </p>
      )}
    </form>
  );
}
