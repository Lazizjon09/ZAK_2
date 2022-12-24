import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  MenuIcon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from '../../public/logo.png'
import React from "react";
import MenuComponent from "../Components/MenuComponent";
import SVGICONS from "../Components/SVGICONS";
import Image from "next/image";
import DrawerExample from "../Components/Menu";
import SizeExample from "../Components/Menu";


interface Props {
  children: any;
}

export const defStyle = {
  width: "100%",
  maxWidth: "1296px",
  margin: "0 auto",
};

function MainLayout({ children }: Props) {
  return (
    <>

      <header style={{ ...defStyle, padding: "25px 0px", paddingRight: '20px' }}>
        <HStack
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexDirection={{ sm: 'row', esm: "column", pls: "column" }}
          pl={'20px'}
        >
          <Link href="/">
            <Img src="/logo.png" alt="logo" width={{ sm: "200px", esm: "140px", pls: "100px" }} />
          </Link>
          <Stack width={'100%'} alignItems="center" gap="10px" flexDirection={'row'} justifyContent={"center"}>
            <InputGroup
              bg="brand.lightGreen"
              width="100%"
              borderRadius="16px"
              h="100%"
              padding="5px 21px"
              display="flex"
              color="white"
              textAlign="center"
              alignItems="center"
            >
              <Input
              height="41px"
              // type="text"
              textAlign="center"
              placeholder="Спасибо за посещение нашего сайта "
              _placeholder={{ color: "white" }}
              focusBorderColor="none"
              border="none !important" />
      
         
              </InputGroup>

     
            <Box bg="brand.lightGreen" marginTop={'0px !important'} display={{ base: "block", lg: "none" }}>
            <SizeExample/>
            </Box>
          </Stack>
        </HStack>
      </header>
      <main style={{ padding: '20px', maxWidth: '1296px', margin: '0 auto' }}>{children}</main>
      <footer style={{ backgroundColor: "#00AC73", padding: "100px 20px" }} >
        <HStack style={defStyle} justifyContent="space-between" alignItems={'center'} gap={{ pls: "40px" }} flexDirection={{ pls: "column", md: "row" }} >
          <Stack w={{ sm: "100%", md: "25%" }} flexDirection={'row'} alignItems="center" justifyContent={'center'} textAlign={{ pls: 'center', md: "start" }}>

            <Text variant="p" width={'90%'}>
              Серви поддерживает вас и помогает найти лекарства по выгодным
              ценам и с удобной круглосуточной доставкой почти в любую точку
              страны. Будьте здоровы с нами!
            </Text>
          </Stack>
          <Stack flexDirection={'row'} gap={{ sm: "100px", pls: "30px", esm: "70px", md: "30px" }} width={{ smm: "91%", md: "70%" }} alignItems={'flex-start'} justifyContent={"center"}>
            <Stack alignItems="flex-start">
              <Text variant="smallHeading" fontSize={{ md: "24px", sm: "20px", esm: "18px" }}>О компании</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Контакты</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Доставка</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Пользовательское соглашение</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Стать партнером</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Стать курьером</Text>
            </Stack>
            <Stack alignItems="flex-start" mt={'0px !important'}>
              <Text variant="smallHeading" fontSize={{ md: "24px", sm: "20px", smm: "18px" }}>Помощь</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }}>Часто задаваемы вопросы</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Как заказать</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Обратная связь</Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >
                Правила для оформления отзывов и комментариев
              </Text>
              <Text variant="p" fontSize={{ sm: "18px", pls: "13px" }} >Стать курьером</Text>
            </Stack>
          </Stack>
          <VStack  alignItems="flex-start">
            <Text  variant="smallHeading" fontSize={{ md: "24px", sm: "20px", smm: "18px" }}>Мы в социальных сетях</Text>
            <HStack>
              <SVGICONS icon="facebook" />
              <SVGICONS icon="instagram" />
              <SVGICONS icon="telegram" />
            </HStack>
          </VStack>
        </HStack>
      </footer>
    </>
  );
}

export default MainLayout;
