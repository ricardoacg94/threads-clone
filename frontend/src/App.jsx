import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { PostPage } from "./pages/PostPage";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Auth } from "./pages/Auth";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/UserAtom";
import { LogoutButton } from "./components/LogoutButton";
import { UpdateUser } from "./pages/UpdateUser";

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <Auth /> : <Navigate to={"/"} />}
        />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        <Route path="/update" element={user ? <UpdateUser /> : <Auth />} />
      </Routes>

      {user && <LogoutButton />}
    </Container>
  );
}

export default App;
