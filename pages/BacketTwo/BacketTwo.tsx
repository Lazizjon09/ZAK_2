import { Box, Button, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import HookUsage from "../../src/Components/Increment";
import MedicineTablets from "../../src/Components/MedicineTablets";
import Mtablets from "../../src/Components/Mtablets";
import MainLayout from "../../src/Layout/MainLayout";

function Basket() {
  const arr = [1, 2, 3, 4];
  return (
    <MainLayout>
      <Text fontSize={{ smm: "32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }} textAlign="center">
        Оформление заказа
      </Text>
      <Center mt="70px">
        <Box display="flex" flexDirection={{ smm: 'column-reverse', lg: 'row' }} gap={'40px'}>
          <Box mb={'40px'}>
            <Mtablets d="col" arr={arr} cols={5} />
          </Box>
          <Box
            height="250px"
            width={{ sm: "60%", esm: '72%' }}
            bg="#FFFFFF"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
            borderRadius="15px"
          >
            <Box margin="20px" display="flex" gap="15">

              <Box>
                <Text>Сумма товаров:</Text>
                <Text>Скидка:</Text>
                <Text>Оплата:</Text>
                <Text>Адрес:</Text>
                <Text>Получатель:</Text>
                <Text>Итого:</Text>
              </Box>
              <Box marginLeft="10px">
                <Text>2 400 000 сум</Text>
                <Text>0 сум</Text>
                <Text>Картой</Text>
                <Text>Ташкент</Text>
                <Text>Шахзод</Text>
                <Text color=" #00AC73;">2 420 000 сум</Text>
              </Box>
            </Box>
            <Link href="/Backetfinish/backfinish">

              <Button marginLeft="6%" bg="brand.lightGreen">Подтвердить</Button>
            </Link>
          </Box>
        </Box>

      </Center>
    </MainLayout>
  );
}

export default Basket;
