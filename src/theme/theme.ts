import { extendTheme } from "@chakra-ui/react"
import { Button } from "./Components/Button"
import { Text } from "./Components/Text"
import { Input } from "./Components/Input"

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  pls: "320px",
  smm: '360px',
  esm: '450px',
  sm: '650px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  'fhd': '1920px',
}

export const theme = extendTheme({
  colors: {
    brand: {
        white: "#fff",
        darkGreen: "#00504D",
        lightGreen: "#00AC73"
    },
  },
  components: {
    Button,
    Text
    // Input,
  },
  breakpoints
})
