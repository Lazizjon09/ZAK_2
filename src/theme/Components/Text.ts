import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
	// style object for base or default style
    baseStyle: {
        color: "black"
        // whiteSpace: "nowrap"
    },
    variants: {
        smallHeading: {
            color: "#fff",
            fontSize: "24px",
            fontWeight: "700"
        },
        headingB: {
            color: "#000",
            fontSize: "60px",
            fontWeight: "700"
        },
        p: {
            color: "#fff",
            fontSize: "14px",
            fontWeight: "400",
            textAlign:"start"
        },
        h1: {
            fontFamily: "sans-serif",
            fontStyle: "italic"
        }
    },
    sizes: {
        xl: {
            fontSize: "100px"
        },
        sm: {
            fontSize: "10px"
        }
    }
};
