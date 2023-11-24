import {
  Avatar,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Actions } from "../components/Actions";
import { Comment } from "../components/Comment";

export const PostPage = () => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src="/ricardo.jpg"
            size={"md"}
            name="Ricardo Coronado"
          ></Avatar>
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              ricardoacg94
            </Text>
            <Image src={"/verified.png"} w={4} h={4} ml={4} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}> Lets talk about threads</Text>
      <Box
        borderRadius={"6"}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/jsp.png"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions like={like} setLike={setLike} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (like ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2x1"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like , reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="Hey great information"
        createdAt="3d"
        username="Ericka Maynard"
        avatar="https://img.freepik.com/free-photo/portrait-smiling-beautiful-woman-touching-her-face-with-natural-make-up-looking-cheerful-front-standing-against-white-wall_176420-38914.jpg?w=996&t=st=1698072715~exp=1698073315~hmac=8227aa7f3f03662a4dd9dbc4988e2e3ef8c44100279c96e853dd0c0fa6145250"
      />
      <Comment
        comment="You rock Ricky, great information"
        createdAt="5d"
        username="Dave Grohl"
        avatar="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/09/28/d872712c-a645-4d4a-8a75-a473c698aacf/dave-grohl-the-ultimate-rock-star"
      />
      <Comment
        comment="Wow im impressed!"
        createdAt="10d"
        username="Usain Bolt"
        avatar="/bolt.png"
      />
    </>
  );
};
