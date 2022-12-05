import { Box, Button, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import HookUsage from "../../src/Components/Increment";
import MedicineTablets from "../../src/Components/MedicineTablets";
import Mtablets from "../../src/Components/Mtablets";
import MainLayout from "../../src/Layout/MainLayout";

function Basket() {
  const arr = [1];
  return (
    <MainLayout>
      <Text fontSize={{ smm: "32px", esm:'35px',sm: "44px", md: "50px", lg: "52px" }} mb={'30px'} textAlign="center">
        Корзина
      </Text>
      <Box display="flex" justifyContent={'space-between'} flexDirection={{smm:'column-reverse', lg: 'row'}} gap={{ smm: "40px", xl: '10px' }}>
        <Box width={{ lg: '60%' }} marginBottom={'30px'}>
          <Mtablets d="col" arr={arr} cols={4} />
        </Box>
        <Box
          height={{esm:'190px', smm: "158px"}}
          padding="10px"
          width={{smm: "85%", esm:"60%", lg: '30%'}}
          bg="#FFFFFF"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          borderRadius="15px"
        >
          <Box margin={{esm:"20px", smm: "12px"}} display="flex" gap="5">
            <Box>
              <Text>Сумма товаров:</Text>
              <Text>Скидка:</Text>
            </Box>
            <Box>
              <Text>2 400 000 сум</Text>
              <Text>0 сум</Text>
            </Box>
          </Box>
          <Link href="/Register/register">
            <Button marginLeft={{esm:"5%", lg:"22%", smm: "6.5%"}} bg="brand.lightGreen">Оформить заказ</Button>
          </Link>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default Basket;
