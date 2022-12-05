import { Accordion, Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MainLayout from "../../src/Layout/MainLayout";
import Accord from "../../src/Components/Accord";
import Tablets from "../../src/Components/Tablets";
import Link from "next/link";
import { defStyle } from "../../src/Layout/MainLayout";
import HookUsage from "../../src/Components/Increment";

function Discraption() {
	const arr = [1, 2, 3, 4];
	return (
		<MainLayout>
			<MedicinBigCom />
		
			<Box
		
				style={defStyle}
				w="100%"
				height="fit-content"
				bg="#FFFFFF"
				boxShadow="0px 0px 20px rgba(0, 0, 0, 0.16);"
				borderRadius="25px"
				mb="40px"
			>
					<Box mt="40px">

				<Accord />
					</Box>
			</Box>
			{/* <Text textAlign="center" fontSize={{ esm: '33px', sm: "44px", md: "50px", lg: "52px" }} mb="40px" mt="40px" >
				Другие товары
			</Text>
			<Center mb="40px">
				<Tablets d="col" arr={arr} cols={4} />
			</Center> */}
		</MainLayout>
	);
}

export default Discraption;


const MedicinBigCom: React.FC = () => {
	return (
		<Box
			style={defStyle}
			display="flex"
			width="100%"
			bg="#FFFFFF"
			boxShadow="0px 0px 20px rgba(0, 0, 0, 0.16);"
			borderRadius="25px"
			padding="20px"
			flexDirection={{ pls: 'column', md: "row" }}
		>
			<Image
				height="500px"
				width="500px"
				src="/brandbook.png"
				alt="logo"
				objectFit="contain"
			/>
			<Stack justifyContent={'space-between'} >
				<Text fontSize={{ md: "35px", sm: '25px', esm: "20px" }} fontWeight={'600'}>
				Спирт этиловый медицинский  70 %.
				</Text>
				<Text fontSize={{ md: "30px", sm: '23px', esm: '18px' }} color="#00AC73">
					900 сум
				</Text>
				<Box display="flex" gridGap="7">
					<Box>
						<Text fontSize={{smm: "16px", pls: "15px"}} color=" #7E7E7E;">
							Международное название: <br/>  <b style={{color: "black"}}>Medicine Alcohol</b>
						</Text>
						<Text fontSize={{smm: "16px", pls: "15px"}} color=" #7E7E7E;">Производитель:<br/> <b style={{color: "black"}}>(Uzbekistan)</b></Text>
						<Text fontSize={{smm: "16px", pls: "15px"}} color=" #7E7E7E;">Форма выпуска:<br/> <b style={{color: "black"}}>Штука</b></Text>
						<Text fontSize={{smm: "16px", pls: "15px"}} color=" #7E7E7E;">Фарм. группа:<br/> <b style={{color: "black"}}>-</b></Text>
						<Text fontSize={{smm: "16px", pls: "15px"}} color=" #7E7E7E;"> <b style={{color: "black"}}>Заказать</b></Text>
						<br />
						<HookUsage />
						<br />
					</Box>
				</Box>
				<Link href="/Register/register">
					<Button
						marginLeft={{ md: '400px', lg: "700px" }}
						marginTop="80px"
						p={{ md: "25px 60px", esm: '15px 40px', pls: "13px 45px" }}
						bg=" #00AC73;"
					>
						В корзину
					</Button>
				</Link>
			</Stack>
		</Box>
	)
}