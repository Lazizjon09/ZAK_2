import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import HookUsage from "./Increment";

interface MedicineTabletsProps { }
const MedicineTablets: React.FC<MedicineTabletsProps> = () => {
  return (
    <Center >
      <Box
        display="flex"
        height="250px"
        width="100%"
        backgroundColor="white"
        borderRadius="30px"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12)"
        padding={{ sm: '15px', lg: '5px', xl: '15px' }}
      >
        <Box mt={{ sm: "30px", smm: '60px' }}>
          <Image src="/alcohol.png" height="200px" width="150px" alt="logo" />
        </Box>
        <Box mt={{ sm: '0px', smm: '20px' }}>
          <Text marginTop="15px" fontSize={{ sm: "22px", xl: '24px', esm: '20px', smm: "17px" }}>Вентолин АЭРОЗ Д/ИНГАЛ 100МКГ/ДОЗА 200ДОЗ</Text>
          <Text marginTop="20px" color="brand.lightGreen" fontSize={{ sm: "21px", xl: '24px', esm: "21px", smm: "20px" }}>33 400 сум</Text>
          <Box marginTop="35px">
            <HookUsage />
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default MedicineTablets;
