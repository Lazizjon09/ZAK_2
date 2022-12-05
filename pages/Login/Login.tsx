import { Box, Button, Center, Checkbox, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Imputpassword from "../../src/Components/Imputpassword";
import MainLayout from "../../src/Layout/MainLayout";

function Login() {
  return (
    <MainLayout>
      <Center width={'100%'}>
        <Box height="600px" width={{ sm: '60%', pls: "100%" }}>
          <Text textAlign="center" fontSize={{ esm: '35px', sm: "44px", md: "50px", lg: "52px", pls: "32px" }}>
            Войти
          </Text>
          <Center mt="10px">
            <Box
              height="350px"
              width="100%"
              bg="white"
              borderRadius="15px"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
            >
              <Box marginLeft="40px" mt="20px">
                <Text>Введите логин</Text>
                <Input
                  mt="10px"
                  height="50px"
                  width="85%"
                  borderRadius="15px"
                  placeholder="Шахзод"
                ></Input>
              </Box>
              <Box marginLeft="40px" mt="20px">
                <Text>Введите пароль</Text>
                <Box mt="20px">
                  <Imputpassword />
                </Box>
              </Box>
              <Box display="flex" width={'96%'} gap={"10px"} justifyContent="space-between" alignItems={'center'}>
                <Box display={{esm:"flex", pls: "none"}} gap="10px" mt="10px" ml="40px">
                  <Checkbox />
                  <Text color="#7E7E7E;" fontSize={{ esm: "17px", smm: "13px", pls: "12px" }}>Запомнить меня</Text>
                </Box>
                <Box>
                  <Link href="/Register/register">
                    <Text ml={{ pls: "40px", sm: "0px" }} mr={{ smm: "60px", pls: "0px" }} mt="10px" fontSize={{ esm: "17px", smm: "13px", pls: "12px" }} color="#007AFF">
                      Забыли пароль?
                    </Text>
                  </Link>
                </Box>
              </Box>
              <Center mt="20px">
                <Button p={{ md: "25px 60px", esm: '15px 50px', pls: "13px 45px" }} bg="brand.lightGreen">
                  Войти
                </Button>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    </MainLayout>
  );
}

export default Login;
