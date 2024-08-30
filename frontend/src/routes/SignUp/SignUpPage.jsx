import { SignUp } from "@clerk/clerk-react";
import "./signUp.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/signup" signInUrl="/signin" />
    </div>
  );
};

export default SignUpPage;
