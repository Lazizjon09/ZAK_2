import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontSize: "16px",
    padding: "15px 21px",
    borderRadius: "15px !important",
    color: "white",
    _hover: {
        backgroundColor: "#00504D !important",
    }
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px'
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}