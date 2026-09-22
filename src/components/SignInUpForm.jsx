import { useState } from "react";
import { useAppStore } from "../store/useAppStore";

export default function SignInUpForm({ isOpen, closeForm }) {
  const signIn = useAppStore((state) => state.signIn);
  const signUp = useAppStore((state) => state.signUp);
  const authLoading = useAppStore((state) => state.authLoading);
  const authError = useAppStore((state) => state.authError);

  const [inviteCode, setInviteCode] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function resetForm() {
    closeForm(false);
    setInviteCode("");
    setUsername("");
    setPassword("");
    setSuccessMessage("");
    setPasswordVisible(false);
    setIsSignUp(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage("");

    try {
      if (isSignUp) {
        await signUp(username, password, inviteCode);
        setSuccessMessage("Signed up successfully.");
      } else {
        await signIn(username, password);
        setSuccessMessage("Signed in successfully.");
      }
      setTimeout(() => {
        resetForm();
      }, 1300);
    } catch (error) {
      console.error(`Sign ${isSignUp ? 'up' : 'in'} failed:`, error);
      if (!isSignUp) {
        setPassword("");
      }
    }
  }

  return (
    <div id="signInPage" className={`${isOpen && 'open'}`}>
      <form onSubmit={handleSubmit} className="signUpFormTest">
        <md-text-button type="button" onClick={resetForm}>
          <md-icon slot="icon">arrow_back</md-icon>
          <u>Go back</u>
        </md-text-button>
        <span style={{ fontSize : '32px', alignSelf : 'center'}}>Sign {isSignUp? 'Up' : 'In'}</span>
        {isSignUp && 
          <md-outlined-text-field
            label="Invite Code"
            no-asterisk
            onInput={(event) => setInviteCode(event.target.value)}
            required
          />}
        <md-outlined-text-field
          no-asterisk
          label="Username"
          value={username}
          onInput={(event) => setUsername(event.target.value)}
          required
        />

        <div className="inputContainer">
          <input
            type={passwordVisible ? "text" : "password"}
            className="mdInput"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password-input"
          />
          <label htmlFor="password-input" className="mdLabel">Password</label>
          <md-icon-button
            type="button"
            className="md-icon-btn"
            onClick={() => setPasswordVisible(!passwordVisible)}
            aria-label="Toggle password visibility"
          >
            <md-icon>
              {passwordVisible ? "visibility_off" : "visibility"}
            </md-icon>
          </md-icon-button>
        </div>

        {authError && (
          <span style={{ color: "red" }}>
            {authError}
          </span>
        )}

        {successMessage && (
          <span style={{ color: "green" }}>
            {successMessage}
          </span>
        )}

        <div className="mdButtonDetails">
          <md-filled-button type="submit" disabled={authLoading}>
            {authLoading ? <span>Signing {isSignUp?'up':'in'}...</span> : <span>Sign {isSignUp?'up':'in'}</span>}
          </md-filled-button>
          <span style={{alignSelf:'end'}}>{isSignUp ? 'Have an' : 'No'} account? <b><u onClick={() => setIsSignUp(!isSignUp)}>Sign {isSignUp?'In':'Up'}</u></b></span>
        </div>
      </form>
    </div>
  );
}
