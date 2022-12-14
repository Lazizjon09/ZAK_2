import { Box, Button, Center, Img, Stack, Text } from "@chakra-ui/react";
import { left } from "@popperjs/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tablets from "../src/Components/Tablets";
import MainLayout, { defStyle } from "../src/Layout/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zakrubbingalcohol.uz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logop.png" />
      </Head>
      <MainLayout>
        <Box></Box>
        <Box
          bgImage="/pill.png"
          w="100%"
          height={{ sm: "500px", esm: "330px", pls: "330px" }}
          overflow="hidden"
          borderRadius="24px"
          style={defStyle}
          backgroundSize={{ pls: "105% 100%", md: "100% 190%" }}
          backgroundPosition={{ pls: "0px 0px", md: "0px -200px" }}
          objectFit={"contain"}
        >
          <Center
            padding={"30px"}
            flexDir="column"
            style={{ backgroundColor: "rgba(0, 80, 77, 0.5)" }}
            w="100%"
            h="100%"
            textAlign="center"
          >
            <Text
              fontSize={{
                smm: "26px",
                pls: "22px",
                esm: "32px",
                sm: "44px",
                md: "50px",
                lg: "52px",
              }}
              w="90%"
              color="white"
            >
              ZAK Pharmacy ваш здоровый выбор
            </Text>
            <Text
              fontSize={{
                smm: "15px",
                pls: "22px",
                esm: "32px",
                sm: "44px",
                md: "50px",
                lg: "52px",
              }}
              w="100%"
              color="white"
            >
              Заказать этиловый спирт стало очень просто
            </Text>
            <br />  
            <Link href="/Discraption/Discraption">
              <Button
                bg="brand.lightGreen"
                p={{ md: "25px 60px", esm: "15px 40px", pls: "13px 45px" }}
              >
                Начать
              </Button>
            </Link>
          </Center>
        </Box>
        <Center m="30px 0px"></Center>
        <Center m="30px 0px" flexDir="column"></Center>

        <Center m="30px 0px" flexDir="column">
          <Text
            mt={"20px"}
            mb={"20px"}
            fontSize={{
              smm: "31px",
              pls: "27px",
              esm: "35px",
              sm: "44px",
              md: "50px",
              lg: "52px",
            }}
            color="black"
            fontWeight="700"
          >
            О нас
          </Text>

          <Box
            flexDirection={{ md: "column", lg: "row" }}
            width="100%"
            display="flex"
            position="relative"
          >
            <Box
              display={{ sm: "none", md: "block" }}
              width={{ sm: "50%", lg: "100%" }}
            >
              <Box
                height={{ lg: "250px", xl: "350px" }}
                width={{ lg: "250px", xl: "350px" }}
                display={{ md: "none", lg: "block" }}
                bg="#00504D"
                borderRadius="30px"
              ></Box>
              <Box position="absolute" left="100px" top="100px">
                <Img
                  height={{ md: "250px", lg: "250px", xl: "350px" }}
                  width={{ md: "250px", lg: "250px", xl: "350px" }}
                  display={{ base: "none", lg: "block" }}
                  style={{ borderRadius: "30px" }}
                  src="/zakkkk.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Stack textAlign={{ md: "center", lg: "start" }}>
                <Text
                  color="black"
                  fontSize={{
                    pls: "21px",
                    smm: "22px",
                    esm: "20px",
                    sm: "24px",
                    md: "26px",
                    lg: "25px",
                  }}
                  fontWeight={"700"}
                  width={{ md: "auto", lg: "60%", pls: "90%" }}
                >
                  Наши товары делают жизнь комфортной и безопасной. Высокий
                  уровень сервиса и понимания к каждому покупателю
                </Text>
              </Stack>
              <Stack
                flexDirection={{ pls: "column", md: "row", lg: "column" }}
                justifyContent={{ md: "space-between", lg: "inherit" }}
              >
                <Stack
                  flexDirection={{ pls: "column" }}
                  justifyContent={{ md: "space-between", lg: "inherit" }}
                >
                  <Box>
                    <Text
                      fontSize={{ sm: "23px", smm: "20px", pls: "18px" }}
                      fontWeight={"500"}
                      marginTop="10px"
                    >
                      01. Большой ассортимент
                    </Text>
                    <Text fontSize="14px" color="#7E7E7E">
                      Для ванной комнаты с различным покрытием
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ sm: "23px", smm: "20px", pls: "18px" }}
                      fontWeight={"500"}
                      marginTop="10px"
                    >
                      02. Доступные цены
                    </Text>
                    <Text fontSize="14px" color="#7E7E7E">
                      Сантехника под любой запрос
                    </Text>
                  </Box>
                </Stack>
                <Stack
                  flexDirection={{ pls: "column" }}
                  justifyContent={{ md: "space-between", lg: "inherit" }}
                >
                  <Box>
                    <Text
                      fontSize={{ sm: "23px", smm: "20px", pls: "18px" }}
                      fontWeight={"500"}
                      marginTop="10px"
                    >
                      03. Высокий уровень сервиса
                    </Text>
                    <Text fontSize="14px" color="#7E7E7E" width="100%">
                      Решаем неудовлетворенные потребности покупателей, ценим
                      клиентов как деловых партнеров
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ sm: "23px", smm: "20px", pls: "18px" }}
                      fontWeight={"500"}
                      marginTop="10px"
                    >
                      04. Круглосуточная доставка
                    </Text>
                    <Text fontSize="14px" color="#7E7E7E">
                      Предоставляем круглосуточную доставку по всему Узбекистану
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box marginTop="50px">
            <Image src="/Приложение.png" height="400px" width="1296px" alt="" />
          </Box>
        </Center>
      </MainLayout>
    </>
  );
};

export default Home;
