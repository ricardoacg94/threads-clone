import React from "react";
import SignupCard from "../components/SingUp";
import LogIn from "../components/LogIn";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/AuthAtom";
export const Auth = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState == "login" ? <LogIn /> : <SignupCard />}</>;
};
