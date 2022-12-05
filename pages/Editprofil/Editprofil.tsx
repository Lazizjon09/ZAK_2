import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Checkbox, Img, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Accord from "../../src/Components/Accord";
import MainLayout from "../../src/Layout/MainLayout";
import Profil from "../Profil/Profil";
import ic_card_visa from '../../public/ic_card_visa.png'

function Editprofil() {
  return (
    <MainLayout>
      <Box mb={'40px'}>
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
            position='relative'
          >
            <Stack sx={{ width: '100%', flexDirection: { sm: 'row', pls: 'column' }, alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack width={'100%'} flexDirection={{ pls: 'column', sm: 'row' }} alignItems={'center'} gap={'20px'}>
                <Img
                  src="/Rectangle 38.png"
                  width={{ esm: '170px', smm: "150px", pls: "120px" }}
                  transform={{ sm: 'translateY(-10%)' }}
                />
                <Stack sx={{ alignItems: 'center' }} width={'100%'}>
                  <Box mt="10px" width={'100%'}>
                    <Text>Введите ФИО</Text>
                    <Input
                      mt="10px"
                      height="40px"
                      width={{ sm: "300px", pls: '100%', lg: '400px' }}
                      borderRadius="15px"
                      placeholder="Максим Максимов"
                    ></Input>
                  </Box>
                  <Box mt="10px" width={'100%'}>
                    <Text>Введите номер</Text>
                    <Input
                      mt="10px"
                      height="40px"
                      width={{ sm: "300px", pls: '100%', lg: '400px' }}
                      borderRadius="15px"
                      placeholder="+998 90 900 90 90"
                    ></Input>
                  </Box>
                  <Box mt="10px" width={'100%'}>
                    <Text>Введите адрес</Text>
                    <Input
                      mt="10px"
                      height="40px"
                      width={{ sm: "300px", pls: '100%', lg: '400px' }}
                      borderRadius="15px"
                      placeholder="Ташкент, Проспект Халклар Дустлиги, 1"
                    ></Input>
                  </Box>
                </Stack>
              </Stack>
              <Link href="/Profil/Profil">
                <div>

                  <Button
                    height={{ lg: "70px", sm: "60px" }}
                    width={{ lg: "200px", sm: "120px" }}
                    bg=" #00AC73;"
                    transform={{ sm: 'translateY(-175%)' }}
                    position={{ sm: 'inherit', pls: 'absolute' }}
                    right={'7%'}
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
                    top={{ sm: "10.5%", pls: '1.8%' }}
                    display={{ sm: 'none', pls: "flex" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <AddIcon />
                  </Button>
                </div>
              </Link>
            </Stack>
            <Stack flexDirection={{ sm: 'row', pls: 'column' }} gap={'25px'} flexWrap={'wrap'} justifyContent={'space-between'} mt={'20px'} >
              <Box
                width={{ xl: '30%', lg: '48%', "sm": '47%' }}
                boxShadow="0px 3px 14px 3px rgba(0, 0, 0, 0.12);"
                bg="#14B37E;"
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
                  <Checkbox />
                  <Img src={ic_card_visa.src} />
                </Stack>
              </Box>
              <Box
                width={{ xl: '30%', lg: '48%', "sm": '47%' }}
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
                <Stack marginTop={'10px'} justifyContent={'space-between'} height={'100%'} alignItems={'flex-end'}>
                  <Checkbox />
                  <Img src={ic_card_visa.src} />
                </Stack>
              </Box>
              <Link href="/AddCard/Addcard">
                <Box
                  height={{smm: "192px", pls: "160px"}}
                  width={{ xl: '30%', lg: '48%', "sm": '47%' }}
                  boxShadow="0px 3px 14px 3px rgba(0, 0, 0, 0.12);"
                  border="solid 1px  #00AC73;"
                  borderRadius="15px"
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <AddIcon
                      color="#00AC73;"
                      fontSize="50px"
                      alignItems="center"
                    />
                  </Box>
                </Box>
              </Link>
            </Stack>
          </Box>
        </Center>
        <Center mt="20px">
          <Box
            minHeight="100px"
            width="100%"
            bg="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.16);"
            borderRadius="25px"
            overflow={'hidden'}
          >
            <Accord />
          </Box>
        </Center>
      </Box>
    </MainLayout>
  );
}

export default Editprofil;
