import { Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/UserAtom";
import useShowToast from "../hooks/useShowToast";
export const LogoutButton = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const showToast = useShowToast();
  const handdleLogout = async () => {
    try {
      const res = await fetch("/api/users/userlogout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        showToast("Error", "error", data.error);

        return;
      }
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"40px"}
      size={"sm"}
      onClick={handdleLogout}
    >
      Logout
    </Button>
  );
};
