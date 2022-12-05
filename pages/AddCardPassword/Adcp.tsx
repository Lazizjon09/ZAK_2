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
      <Text textAlign="center" fontSize={{ smm:"32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
        Добаление карты
      </Text>
      <Center height="350px">
        <Box
          w="400px"
          height="270px"
          bg="white"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
        >
          <Text textAlign="center" mt="30px">
            Введите код подтверждения
          </Text>
          <Center mt="20px">
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
          <Box
            display="flex"
            alignItems="center"
            ml={{esm:"50px", smm: "30px"}}
            gap="10px"
            mt="20px"
          >
            <Text fontSize={{ esm: "", smm: "15px" }}>Возникли проблемы?</Text>
            <Text color="brand.lightGreen">Отправить еще раз.</Text>
          </Box>
          <Center>
            <Button mt="30px" bg="brand.lightGreen">
              Подтвердить
            </Button>
          </Center>
        </Box>
      </Center>
    </MainLayout>
  );
}

export default numcode;
