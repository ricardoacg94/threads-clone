import {
  Avatar,
  Box,
  Flex,
  VStack,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
export const UserHeader = () => {
  const toast = useToast();
  const copyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        position: "bottom",
        render: () => <Box bg={"gray.light"}>Link Copied</Box>,
      });
    });
  };
  return (
    <VStack gap={4} align={"start"}>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"30"} fontWeight={"bold"}>
            {" "}
            Ricardo Coronado{" "}
          </Text>
          <Flex gap={2} align={"center"}>
            <Text fontSize={"sm"}>Ricardoacg94</Text>
            <Text
              fontSize={"sm"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Ricardo Coronado" src="/ricardo.jpg" size={"xl"} />
        </Box>
      </Flex>
      <Text>
        FullStack Web Developer, Political Scientist, Student of Software
        Engineer
      </Text>

      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>10 followers</Text>
          <Box w={1} height={1} bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem onClick={copyUrl} bg={"gray.dark"}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb={3}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1}></Flex>
      </Flex>
    </VStack>
  );
};
