import { useToast } from "@chakra-ui/react";
import React from "react";

const useShowToast = () => {
  const toast = useToast();
  const showToast = (title, status, description) => {
    toast({
      title,
      status,
      description,
      duration: 3000,
      isClosable: true,
    });
  };
  return showToast;
};

export default useShowToast;
