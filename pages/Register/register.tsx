import {
  Box,
  Button,
  Center,
  Checkbox,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Imputpassword from "../../src/Components/Imputpassword";
import MainLayout from "../../src/Layout/MainLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
function register() {
  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    companyEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .min(7, "Phone must be at least 7 numbers")
      .max(12, "UserPhonename must not exceed 12 characters"),
    companyWebsite: Yup.string().url("Invalid website URL"),
    companySize: Yup.string().required("Company size is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  type formData = {
    fullName: string;
    companyEmail: string;
    phoneNumber: string;
    companyWebsite: string;
    companySize: string;
    acceptTerms: boolean;
  };

  const onSubmit = async (data: formData) => {
    console.log(data, 'hello worl');

    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        body: JSON.stringify({
          query: data,
        }),
      });
      console.log(response, "Form submitted successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setValue("fullName", "");
      setValue("companyEmail", "");
      setValue("phoneNumber", "");
      setValue("companyWebsite", "");
      setValue("companySize", "");
      setValue("acceptTerms", false);
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formData>({
    mode: "onChange",
    resolver: yupResolver(validateSchema),
  });
  if (!errors.fullName || !errors.phoneNumber) {
    const onSubmit = async (data: formData) => {
      try {
        const response = await fetch(
          "http://localhost:8888/.netlify/functions/formSubmit",
          {
            method: "POST",
            body: JSON.stringify({
              query: data,
            }),
          }
        );
        console.log(response, "Form submitted successfully");
      } catch (err) {
        console.log(err);
      } finally {
        setValue("fullName", "");
        setValue("companyEmail", "");
        setValue("phoneNumber", "");
        setValue("companyWebsite", "");
        setValue("companySize", "");
        setValue("acceptTerms", false);
      }
    };
  }
  return (
    <MainLayout>
      <Box mb={"40px"}>
        <Text
          textAlign="center"
          fontSize={{
            pls: "27px",
            smm: "32px",
            esm: "35px",
            sm: "44px",
            md: "50px",
            lg: "52px",
          }}
        >
          Регистрация
        </Text>
        <Center mt="10px">
          <Box
            maxHeight="500px"
            width="500px"
            bg="white"
            pb={"20px"}
            borderRadius="15px"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          >
            <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
      

              <Box marginLeft="40px" mt="20px" className="form-group mb-4">
                <Text fontSize={{ esm: "", pls: "12px" }}>Введите имя</Text>
                <FormLabel htmlFor="phoneNumber">
                  <Input
                    type="text"
                    {...register("fullName", {
                      required: "Please enter your full name.",
                    })}
                    id="fullName"
                    aria-describedby="nameHelp"
                    mt="10px"
                    height="40px"
                    width={{ sm: "300px", pls: "85%", lg: "400px" }}
                    borderRadius="15px"
                    placeholder="Шахзод"
                  ></Input>
                </FormLabel>
              </Box>
              <Box>
                <Box marginLeft="40px" mt="10px" textColor="red">
                  {errors.fullName && (
                    <small id="emailHelp">Неправильный имя</small>
                  )}
                </Box>
                <Box></Box>
              </Box>
              <Box marginLeft="40px" mt="10px">
                <Box></Box>
                <Box mt="10px">
                  <Text fontSize={{ esm: "", pls: "12px" }}>
                    Введите номер телефона
                  </Text>
                  <FormLabel htmlFor="fullName">
                    <Input
                      type="number"
                      {...register("phoneNumber", {
                        required: "Please enter your phone number.",
                      })}
                      id="phoneNumber"
                      aria-describedby="numberHelp"
                      mt="10px"
                      height="40px"
                      width={{ sm: "300px", pls: "85%", lg: "400px" }}
                      borderRadius="15px"
                      placeholder="+998"
                    ></Input>
                  </FormLabel>
                </Box>
              </Box>
              <Box marginLeft="40px" mt="10px" textColor="red">
                {errors.phoneNumber && (
                  <small id="emailHelp">неправильный номер телефона</small>
                )}
              </Box>

              <Center mt="30px">
                <Link href="/Numcod/numcode">
                
                
                  <Button
                    type="submit"
                    p={{ md: "25px 60px", esm: "15px 50px", pls: "13px 45px" }}
                    bg="brand.lightGreen"
                  >

                    Войти
                  </Button>
                </Link>
                
              </Center>
            </form>
          </Box>
        </Center>
      </Box>
    </MainLayout>
  );
}

export default register;
