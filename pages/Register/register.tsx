
import { Box, Button, Center, Checkbox, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import MainLayout from "../../src/Layout/MainLayout";

function register() {
  return (
    <MainLayout>
      <Box mb={'40px'}>
        <Text textAlign="center" fontSize={{ pls: "27px", smm: "32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
          Регистрация
        </Text>
        <Center mt="10px">
          <Box
            maxHeight="500px"
            width="500px"
            bg="white"
            pb={'20px'}
            borderRadius="15px"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          >
            <Box marginLeft="40px" mt="20px">
              <Text fontSize={{ esm: "", pls: "12px" }}>Введите логин</Text>
              <Input
                mt="10px"
                height="40px"
                width={{ sm: "300px", pls: '85%', lg: '400px' }}
                borderRadius="15px"
                placeholder="Шахзод"
              ></Input>
            </Box>
           
            <Box marginLeft="40px" mt="10px">
            
              <Box mt="10px">
                <Text fontSize={{ esm: "", pls: "12px" }}>Введите номер для получения кода</Text>
                <Input
                  mt="10px"
                  height="40px"
                  width={{ sm: "300px", pls: '85%', lg: '400px' }}
                  borderRadius="15px"
                  placeholder="+998"
                ></Input>
              </Box>
            </Box>

            <Center mt="30px">
              <Link href="/Numcod/numcode">
                <Button p={{ md: "25px 60px", esm: '15px 50px', pls: "13px 45px" }} bg="brand.lightGreen">
                  Войти
                </Button>
              </Link>
            </Center>
          </Box>
        </Center>
      </Box>
    </MainLayout>
  );
}

export default register;
