import { SignIn } from "@clerk/clerk-react";
import "./signIn.css";

const SignInPage = () => {
  return (
    <div className="signInPage">
      {" "}
      <SignIn
        path="/signin"
        signUpUrl="/signup"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
