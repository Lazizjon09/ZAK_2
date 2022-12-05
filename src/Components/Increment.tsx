import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";

function HookUsage() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 10,
      min: 100,
      max: 1000,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="177px">
      <Button bg="brand.lightGreen" {...dec} sx={{ width: "45px", height: "45px" }}>-</Button>
      <Input {...input} sx={{  }}/>
      <Button bg="brand.lightGreen" {...inc} sx={{ width: "45px", height: "45px" }}>+</Button>
    </HStack>
  );
}

export default HookUsage;
