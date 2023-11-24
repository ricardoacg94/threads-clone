import React from "react";
import { useState } from "react";
import { Avatar, Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { Actions } from "./Actions";
export const UserPost = ({ postImg, postTitle, likes, replies }) => {
  const [like, setLike] = useState(false);
  return (
    <Link to={"/RicardoCoronado/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="rick" src="/ricardo.jpg" />
          <Box h={"full"} w={0.5} bg={"gray.light"} m={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size={"xs"}
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              position={"absolute"}
              top={"0px"}
              left={"12px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              bottom={"0px"}
              left={"25px"}
              padding={"2px"}
            />
            <Avatar
              size={"xs"}
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
              position={"absolute"}
              bottom={"0px"}
              right={"25px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Ricardo Coronado{" "}
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={"6"}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} />
            </Box>
          )}

          <Flex my={1}>
            <Actions like={like} setLike={setLike} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies}
            </Text>{" "}
            <Box borderRadius={"full"} w={0.5} h={0.5} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes + (like ? 1 : 0) + " Likes"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
