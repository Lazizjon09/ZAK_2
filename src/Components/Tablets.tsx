import { Box, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { defStyle } from "../Layout/MainLayout";
import MedicineComponent from "./MedicineComponent";
import MedicineTablets from "./MedicineTablets";

interface Props {
  d: string;
  arr: Array<number>;
  cols?: number;
}

const Tablets = ({ d, arr }: Props) => {
  const col = {
    display: "grid",
    gridTemplateColumns: {sm:`repeat(auto-fill, minmax(275px, 1fr))`, esm: `repeat(auto-fill, minmax(180px, 1fr))`, smm: `repeat(auto-fill, minmax(48.2%, 1fr))`},
    gap: "10px",
  };

  return (
    <Box sx={{ ...defStyle, ...col }}>
      {arr.map((item) => (
        <MedicineComponent key={item} />
      ))}
    </Box>
  );
};

export default Tablets;
