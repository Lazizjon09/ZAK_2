import { Box, Image, Img, Text } from "@chakra-ui/react";
import React from "react";

interface MedicineComponentProps { }

const MedicineComponent: React.FC<MedicineComponentProps> = () => {
  return (
    <Box
      minHeight={{ esm: "300px", sm: '350px', pls: "280px" }}
      width="100%"
      backgroundColor="white"
      borderRadius="30px"
      boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12)"
    >
      <Img
        src="/Фото (14).png"
        height="300px"
        objectFit="contain"
        width="300px"
        alt="logo"
        transform={{ pls: 'translateY(-20%)', sm: "translateY(0%)" }}
      />
      <Text
        sx={{ color: "#7E7E7E", marginLeft: { esm: "20px", pls: "13px" }, fontWeight: "600", fontSize: { esm: '', pls: "14px" }, marginTop: { sm: "-40px", esm: '-85px', pls: "-100px" } }}
      >
        Магний Б6 таб. №50
      </Text>
      <Text sx={{ color: "#00AC73", marginLeft: { esm: "20px", pls: "15px" }, marginTop: { esm: "20px", pls: "10px" }, fontSize: { esm: '', pls: "14px" } }}>
        От 15 000 сум
      </Text>
    </Box>
  );
};

export default MedicineComponent;
