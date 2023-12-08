import { atom } from "recoil";

const userAtom = atom({
  key: "User-Athom",
  default: JSON.parse(localStorage.getItem("user")),
});

export default userAtom;
