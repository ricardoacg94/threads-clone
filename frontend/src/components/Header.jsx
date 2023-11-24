import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        w={50}
        cursor={"pointer"}
        alt="logo"
        src={colorMode == "light" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
