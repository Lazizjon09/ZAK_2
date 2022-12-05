import { Box, Button, Center, Checkbox, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Imputpassword from "../../src/Components/Imputpassword";
import MainLayout from "../../src/Layout/MainLayout";

function Addcard() {
  return (
    <MainLayout>
      <Stack>
        <Text textAlign="center" fontSize={{ smm: "31px", pls: "27px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
          Добаление карты
        </Text>
        <Center>
          <Stack
            width="100%"
            bg="white"
            borderRadius="15px"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
            padding={'30px'}
            gap={'20px'}
          >
            <Box>
              <Text>Введите номер карты</Text>
              <Input
                height="50px"
                width="95%"
                borderRadius="15px"
                placeholder="0000 0000 0000 0000"
              ></Input>
            </Box>
            <Box>
              <Text>Введите дату</Text>
              <Box >
                <Input
                  height="50px"
                  width="95%"
                  borderRadius="15px"
                  placeholder="07/24"
                ></Input>
              </Box>
            </Box>

            <Link href="/AddCardPassword/Adcp">
              <Button p={{ md: "25px 60px", esm: '15px 40px', pls: "13px 56px" }} bg="brand.lightGreen">
                Продолжить
              </Button>
            </Link>
          </Stack>
        </Center>
      </Stack>
    </MainLayout>
  );
}

export default Addcard;
