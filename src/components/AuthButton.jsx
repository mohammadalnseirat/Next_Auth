import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="hover:text-blue-700 transition-colors flex items-center gap-2">
            <FaSignInAlt />
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
