import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export const Comment = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src />
      </Flex>
    </>
  );
};
