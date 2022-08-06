import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "../components/login-btn";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <LoginButton>Pag</LoginButton>
      </div>
    );
  }
};

export default login;
