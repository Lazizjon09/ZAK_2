import {
  Box,
  Button,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainLayout from "../../src/Layout/MainLayout";

function numcode() {
  return (
    <MainLayout>
      <Text
        textAlign="center"
        fontSize={{
          smm: "32px",
          esm: "35px",
          sm: "44px",
          md: "50px",
          lg: "52px",
        }}
      >
        Спaсибо !
      </Text>
      <Center height="350px">
        <Box
          w="400px"
          height="170px"
          bg="white"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
          mt="-100px"
        >
          <Text textAlign="center" mt="30px" fontSize="20px">
            Ваш заказ принят
          </Text>
          <Text textAlign="center" mt="10px" fontSize="20px">
            Скоро с вами свяжется наш менеджер
          </Text>
          <Text textAlign="center" mt="10px" fontSize="20px">
            ✅
          </Text>
        </Box>
      </Center>
    </MainLayout>
  );
}

export default numcode;
