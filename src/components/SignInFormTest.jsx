import { useState } from "react";
import { useAppStore } from "../store/useAppStore";

export default function SignInFormTest() {
  const signIn = useAppStore((state) => state.signIn);
  const authLoading = useAppStore((state) => state.authLoading);
  const authError = useAppStore((state) => state.authError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage("");

    try {
      await signIn(username, password);
      setSuccessMessage("Logged in successfully.");
    } catch (error) {
      console.error("Login failed:", error);
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

      <button type="submit" disabled={authLoading}>
        {authLoading ? "Logging in..." : "Log in"}
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
