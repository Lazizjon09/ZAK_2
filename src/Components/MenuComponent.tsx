import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const MenuComponent = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="brand.lightGreen"
            padding="3"
          >
            <Img
              src="/Узбекский (1).png"
              width={{"lg": "115px", xl: '80px'}}
              alt="logo"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>
              {" "}
              <Img src="/Английский (1).png" alt="logo" />
              <Text style={{ marginLeft: "10px" }}> ENGLISH</Text>
            </MenuItem>
            <MenuItem>
              <Img src="/Русский (1).png" alt="logo" />{" "}
              <Text style={{ marginLeft: "10px" }}> RUSSIAN</Text>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuComponent;
