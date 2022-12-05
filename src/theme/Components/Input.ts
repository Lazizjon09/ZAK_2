import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
	// style object for base or default style
	baseStyle: {
		fontSize: "16px",
		padding: "15px 21px",
		borderRadius: "15px",
		color: "white",
		width: "100%",
		background: "red !important",
        _placeholder: {
            color: "red",
        },
        outline: "none !important"
	},
	sizes: {
		xl: {
			h: "56px",
			fontSize: "lg",
			px: "32px",
		},
	},
};
