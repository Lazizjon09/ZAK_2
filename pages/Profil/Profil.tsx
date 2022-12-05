import { Box, Button, Center, Img, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Accord from "../../src/Components/Accord";
import MainLayout from "../../src/Layout/MainLayout";
import ic_card_visa from '../../public/ic_card_visa.png'
import { AddIcon } from "@chakra-ui/icons";


function Profil() {
  return (
    <MainLayout>
      <Box minHeight="100px" mb={'100px'}>
        <Center>
          <Box
            display="flex"
            minHeight="100px"
            width="100%"
            padding={'20px'}
            bg="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.16);"
            borderRadius="25px"
            flexDirection={'column'}
            position="relative"
          >
            <Stack sx={{ width: '100%', flexDirection: { pls: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack flexDirection={{ sm: 'row', pls: 'column' }} alignItems={'center'} gap={'20px'}>
                <Img
                  src="/Rectangle 38.png"
                  width={{ esm: '170px', smm: "150px", pls: "120px" }}
                />
                <Stack transform={{ lg: 'translateY(-30%)', sm: 'translateY(-20%)' }} textAlign={{ sm: "start", pls: "center" }} >
                  <Text fontSize={{ lg: '24px', sm: '19px', esm: '22px', pls: "18px" }} fontWeight={'600'}>Максим Максимов</Text>
                  <Text fontSize={{ lg: '24px', sm: '19px', esm: '22px', pls: "18px" }} fontWeight={'600'}>+998 90 900 90 90</Text>
                  <Text fontSize={{ lg: '24px', sm: '18px', esm: '22px', pls: "18px" }} fontWeight={'600'}>Ташкент, Проспект Халклар Дустлиги, 1</Text>
                </Stack>
              </Stack>
              <Link href="/Editprofil/Editprofil">
                <div>
                  <Button
                    height={{ lg: "70px", sm: "60px" }}
                    width={{ lg: "200px", sm: "120px" }}
                    bg=" #00AC73;"
                    transform={{ sm: 'translateY(-100%)', lg: "translateY(-80%)" }}
                    display={{ pls: 'none', sm: "block" }}
                  >
                    Изменить
                  </Button>
                  <Button
                    height={{ esm: "55px", smm: "50px", pls: "40px" }}
                    width={{ esm: "55px", smm: "50px", pls: "40px" }}
                    bg="#00AC73;"
                    position={{ sm: 'inherit', pls: 'absolute' }}
                    right={'7%'}
                    top={{ sm: "10.5%", pls: '2.5%' }}
                    display={{ sm: 'none', pls: "flex" }}
                    alignItems={'center'}
                    justifyContent="center"
                  >
                    <AddIcon />
                  </Button>
                </div>
              </Link>
            </Stack>
            <Stack flexDirection={{ sm: 'row', pls: 'column' }} flexWrap={'wrap'} justifyContent={{ sm: 'space-between', lg: "flex-start" }} gap='10px' mt={'20px'} >
              <Box
                width={{ xl: '30%', lg: '48%', "sm": '48%', pls: "100%" }}
                boxShadow="0px 3px 14px 3px rgba(0, 0, 0, 0.12);"
                bg="#14B37E"
                borderRadius="15px"
                padding={'20px'}
                display="flex"
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Stack justifyContent={'space-between'} height={'100%'}>
                  <Text fontSize={{smm:'24px', pls:"20px"}} fontWeight={'500'} >Maksim <br /> Maksimov</Text>
                  <Text>Основная карта</Text>
                  <Text>8600 55** **** 6600</Text>
                </Stack>
                <Stack marginTop={'10px'} justifyContent={'space-between'} height={'92%'} alignItems={'flex-end'}>
                  <Stack></Stack>
                  <Img src={ic_card_visa.src} />
                </Stack>
              </Box>
              <Box
                width={{ xl: '30%', lg: '48%', "sm": '48%', pls: "100%" }}
                boxShadow="0px 3px 14px 3px rgba(0, 0, 0, 0.12);"
                bg="#00504D;"
                borderRadius="15px"
                padding={'20px'}
                display="flex"
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Stack justifyContent={'space-between'} height={'100%'}>
                  <Text fontSize={{smm:'24px', pls:"20px"}} fontWeight={'500'} >Maksim <br /> Maksimov</Text>
                  <Text>Основная карта</Text>
                  <Text>8600 55** **** 6600</Text>
                </Stack>
                <Stack marginTop={'10px'} justifyContent={'space-between'} height={'94%'} alignItems={'flex-end'}>
                  <Stack></Stack>
                  <Img src={ic_card_visa.src} />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Center>
        <Center mt="20px">
          <Box
            minHeight={'100px'}
            overflow={'hidden'}
            width="100%"
            bg="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.16);"
            borderRadius="25px"
          >
            <Accord />
          </Box>
        </Center>
      </Box >
    </MainLayout >
  );
}

export default Profil;
