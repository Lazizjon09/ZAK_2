import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainLayout from "../../src/Layout/MainLayout";

function backfinish() {
  return (
    <MainLayout>
      <Text textAlign="center" fontSize={{ smm: "32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
        Корзина
      </Text>
      <Center mt={'40px'} mb={"40px"}>
        <Box
          background="#FFFFFF"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
          maxHeight="290px"
          width="100%"
          padding={'20px'}
        >
          <Stack gap="20px">
            <Text fontSize={{ smm: '18px', esm: "" }}>Статус заказа №23456</Text>
            <Box display="flex" gap={"20px"} alignItems="center" flexDirection={{ smm: 'column', esm: "row" }} justifyContent="space-between">
              <Box borderRadius="15px" bg="brand.lightGreen" height={{ sm: "80px", esm: '60px', smm: "50px" }} width="300px" color="white">
                <Text textAlign="center" mt={{ sm: "27px", esm: '17px', smm: "10px" }}>Собирается</Text>
              </Box>
              <Box borderRadius="15px" border="solid 1px #00AC73" height={{ sm: "80px", esm: '60px', smm: "50px" }} width="300px" color="#00AC73">
                <Text textAlign="center" mt={{ sm: "27px", esm: '17px', smm: "10px" }}>Собирается</Text>
              </Box>
              <Box borderRadius="15px" bg="#D9D9D9;" color="#7E7E7E;" height={{ sm: "80px", esm: '60px', smm: "50px" }} width="300px">
                <Text textAlign="center" mt={{ sm: "27px", esm: '17px', smm: "10px" }}>Собирается</Text>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Center>
    </MainLayout>
  );
}

export default backfinish;
