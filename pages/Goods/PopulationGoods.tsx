import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Checkbox, IconButton, MenuButton, Select } from "@chakra-ui/react";
import React from "react";
import Filter from "../../src/Components/Filter";
import Tablets from "../../src/Components/Tablets";
import MainLayout, { defStyle } from "../../src/Layout/MainLayout";

interface Props {
  children: JSX.Element;
}

const PopulationGoods = ({ children }: Props) => {
  const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
  return (
    <MainLayout>
      <Box display="flex" gap={'20px'} flexDirection={{ lg: 'row', pls: 'column' }} style={defStyle}>
        <Button width={'9%'} bg="brand.lightGreen" textAlign={'center'} display={{ base: "flex", lg: "none" }} justifyContent="center" alignItems={'center'}>
          <HamburgerIcon />
        </Button>
        <Box width="30%" display={{ pls: 'none', lg: 'block' }} >
          <Filter />
        </Box>
        <Box w={{ "md": "100%", "lg": '70%', pls: "100%" }} marginBottom={'25px'}>
          <Tablets d="col" arr={arr} cols={3} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PopulationGoods;
