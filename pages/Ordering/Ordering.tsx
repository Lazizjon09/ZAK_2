import {
  AspectRatio,
  Box,
  Button,
  Center,
  Checkbox,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import MainLayout from "../../src/Layout/MainLayout";

function ordering() {
  return (
    <MainLayout>
      <Text textAlign="center" fontWeight={'600'} fontSize={{ smm: "32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
        Оформление заказа
      </Text>
      <Center>
        <Box
          mt="20px"
          width="100%"
          height={{ sm: "400px", smm: '450px' }}
          bg="#ffffff"
          boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
        >
          <Text margin="40px" fontSize={{ sm: "24px", esm: "22px", smm: "21px" }}>
            Шаг 1: Выберите тип оплаты
          </Text>
          <Box display="flex" flexDir={{ sm: 'row', esm: "column", smm: "column" }} gap='30px' padding={'35px'}>
            <Box
              height="50px"
              width={{ esm: "100%", sm: "50%" }}
              bg="#FFFFFF;"
              borderRadius="15px"
              boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.12);"
            >
              <Stack padding={'10px'} flexDirection={'row'} width={{ sm: '100%', md: 'auto' }} display="flex" justifyContent="space-between">
                <Box>
                  <Text>Наличными</Text>
                </Box>
                <Box>
                  <Checkbox
                    size="md"
                    colorScheme="green"
                    defaultChecked
                  ></Checkbox>
                </Box>
              </Stack>
            </Box>

            {/* //////////////////////////////////////////////// */}

            <Box
              height="170px"
              width={{ esm: "100%", sm: "50%" , smm: "100%"}}
              bg="#00AC73;"
              borderRadius="15px"
              boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.12);"
            >
              <Stack padding='10px' flexDirection={'row'} alignItems="center" justifyContent="space-between">
                <Box>
                  <Text color="white">Картой</Text>
                </Box>
                <Box>
                  <Checkbox
                    size="md"
                    colorScheme="green"
                    defaultChecked
                  ></Checkbox>
                </Box>
              </Stack>
              <hr />

              <Text margin="10px" color="white">
                Введите номер привязанный к карте
              </Text>
              <Box margin="10px">
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftAddon children="+998" />
                    <Input
                      bg="white"
                      width="300px"
                      type="tel"
                      placeholder="90 900 90 90"
                    />
                  </InputGroup>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ///////////////////////////////////////////////////////////////////// step 2 */}
      </Center>

      <Center>
        <Box
          mt="20px"
          width="100%"
          bg="#ffffff"
          boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
        >
          <Text marginLeft="40px" mt="30px" fontSize={{ sm: "24px", esm: "22px", smm: "21px" }} width={"80%"}>
            Шаг 2: Выберите адрес доставки
          </Text>
          <Text marginLeft="40px" mt="20px">
            Ташкент, Проспект Халклар Дустлиги, 1
          </Text>
          <Box width="100%" height="400px" padding={'40px'}>
            <AspectRatio
              height="100%"
              width="100%"
              borderRadius="10px"
              margin="0 auto"
              mt="10px"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6143.798340315157!2d66.92300380000003!3d39.65198370000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665070769500!5m2!1sru!2s"></iframe>
            </AspectRatio>
          </Box>
        </Box>
      </Center>
      {/* ///////////////////////////////////////////////////////////  step 3 */}

      <Center width="100%">
        <Box
          mt="20px"
          width="100%"
          height={{esm:"300px", smm: "330px"}}
          bg="#ffffff"
          boxShadow=" 0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
        >
          <Text marginLeft="40px" mt="30px" fontSize={{ sm: "24px", esm: "22px", smm: "21px" }}>
            Шаг 3: Введите данные получателя
          </Text>
          <Box marginLeft="40px" mt="20px">
            <Text>Введите имя получателя</Text>
            <Input
              mt="10px"
              height="50px"
              width={{ sm: "400px", esm: "350px", smm: "90%" }}
              borderRadius="15px"
              placeholder="Шахзод"
            ></Input>
          </Box>
          <Box marginLeft="40px" mt="20px">
            <Text>Введите номер получателя</Text>
            <Input
              mt="10px"
              height="50px"
              width={{ sm: "400px", esm: "350px", smm: "90%" }}
              borderRadius="15px"
              placeholder="+998"
            ></Input>
          </Box>
        </Box>
      </Center>
      <Center>
        <Link href="/BacketTwo/BacketTwo">
          <Box mt="50px" height="100px">
            <Button bg="brand.lightGreen">Продолжить</Button>
          </Box>
        </Link>
      </Center>
    </MainLayout>
  );
}

export default ordering;
