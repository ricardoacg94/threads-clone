import { UserHeader } from "../components/UserHeader";
import { UserPost } from "../components/UserPost";

export const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={200}
        replies={10}
        postImg="/jsp.png"
        postTitle={"Look at this Javascript Promises escenario"}
      />
      <UserPost
        likes={80}
        replies={9}
        postImg="/post2.png"
        postTitle={"Nice Tutorial"}
      />
      <UserPost
        likes={75}
        replies={3}
        postImg="/post3.png"
        postTitle={"I love this guys"}
      />
      <UserPost likes={42} replies={5} postTitle={"This is my first thread"} />
    </>
  );
};
