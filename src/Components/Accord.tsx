import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";

import React, { useState } from "react";

const Accord = () => {
  return (
    <Accordion defaultIndex={[2]} allowMultiple borderRadius="15px">
      <Text
        padding={"15px"}
        textAlign="center"
        fontSize={{ sm: "40px", esm: "25px" }}
      >
        Описание
      </Text>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Действующее вещество (МНН):
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Этанол</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Лекарственная форма:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Жидкость для наружного применения
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Показания к применению
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box display="flex">
            <Box>
              <Stack flexDirection={"row"} alignItems={"center"}>
                <Text color="#00AC73;">
                  обработки кожи (рук хирурга, операционного поля, мест
                  инъекций, небольших кожных ран и ссадин, юношеских и иных
                  кожных угрей и т.п.), нормализации кровенаполнения мягких
                  тканей и внутренних органов при ушибах, простудных
                  заболеваниях, мигрени и др.; для приготовления настоек.{" "}
                </Text>
              </Stack>
            </Box>
            <Box></Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Побочные действия
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>При поврежденном кожном покрове на месте нанесения препарата ощущается жжение, которое самостоятельно проходит через несколько минут.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accord;
