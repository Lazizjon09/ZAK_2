

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Typewriter from 'typewriter-effect';

const Textf: NextPage = () => {
  return (
    <Box   fontSize={{
      smm: "22px",
      pls: "18px",
      esm: "26px",
      sm: "30px",
      md: "40px",
      lg: "50px",
    }}
    color="white"
    fontWeight="300"
    mb={"20px"}>
      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString('Заказать этиловый спирт  стало очень просто')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </Box>
  )
}

export default Textf

