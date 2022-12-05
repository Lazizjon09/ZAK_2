import { Box, Text } from "@chakra-ui/react";

interface TextProps {
	item: any
}


const TextComponent = ({item}: TextProps) => {
	return (
		<Box>
			<Text
				fontSize={{ base: "16px", md: "18px" }}
				marginTop="10px"
			>
				0.{item.id} {item.title}
			</Text>
			<Text
				fontSize={{ base: "16px", md: "14px" }}
				color="#7E7E7E"
			>
				{item.description}
			</Text>
		</Box>
	);
};


export default TextComponent