// import {
//   Box,
//   Button,
//   Center,
//   Checkbox,
//   FormLabel,
//   Input,
//   Text,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import React from "react";
// import Imputpassword from "../../src/Components/Imputpassword";
// import MainLayout from "../../src/Layout/MainLayout";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// function register() {
//   const validateSchema = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required"),
//     companyEmail: Yup.string()
//       .email("Invalid email")
//       .required("Email is required"),
//     phoneNumber: Yup.string()
//       .required("Phone number is required")
//       .min(7, "Phone must be at least 7 numbers")
//       .max(12, "UserPhonename must not exceed 12 characters"),
//     companyWebsite: Yup.string().url("Invalid website URL"),
//     companySize: Yup.string().required("Company size is required"),
//     acceptTerms: Yup.boolean().oneOf(
//       [true],
//       "You must accept the terms and conditions"
//     ),
//   });
//   type formData = {
//     fullName: string;
//     companyEmail: string;
//     phoneNumber: string;
//     companyWebsite: string;
//     companySize: string;
//     acceptTerms: boolean;
//   };

//   const onSubmit = async (data: formData) => {
//     console.log(data, "hello world");

//     try {
//       const response = await fetch("http://localhost:3001", {
//         method: "POST",
//         body: JSON.stringify({
//           query: data,
//         }),
//       });
//       console.log(response, "Form submitted successfully");
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setValue("fullName", "");
//       setValue("companyEmail", "");
//       setValue("phoneNumber", "");
//       setValue("companyWebsite", "");
//       setValue("companySize", "");
//       setValue("acceptTerms", false);
//     }
//   };
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<formData>({
//     mode: "onChange",
//     resolver: yupResolver(validateSchema),
//   });
//   if (!errors.fullName || !errors.phoneNumber) {
//     const onSubmit = async (data: formData) => {
//       try {
//         const response = await fetch(
//           "http://localhost:8888/.netlify/functions/formSubmit",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               query: data,
//             }),
//           }
//         );
//         console.log(response, "Form submitted successfully");
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setValue("fullName", "");
//         setValue("companyEmail", "");
//         setValue("phoneNumber", "");
//         setValue("companyWebsite", "");
//         setValue("companySize", "");
//         setValue("acceptTerms", false);
//       }
//     };
//   }
//   return (
//     <MainLayout>
//       <Box mb={"40px"}>
//         <Text
//           textAlign="center"
//           fontSize={{
//             pls: "27px",
//             smm: "32px",
//             esm: "35px",
//             sm: "44px",
//             md: "50px",
//             lg: "52px",
//           }}
//         >
//           Регистрация
//         </Text>
//         <Center mt="10px">
//           <Box
//             maxHeight="500px"
//             width="500px"
//             bg="white"
//             pb={"20px"}
//             borderRadius="15px"
//             boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
//           >
//             <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
//               <Box marginLeft="40px" mt="20px" className="form-group mb-4">
//                 <Text fontSize={{ esm: "", pls: "12px" }}>Введите имя</Text>
//                 <FormLabel htmlFor="phoneNumber">
//                   <Input
//                     type="text"
//                     {...register("fullName", {
//                       required: "Please enter your full name.",
//                     })}
//                     id="fullName"
//                     aria-describedby="nameHelp"
//                     mt="10px"
//                     height="40px"
//                     width={{ sm: "300px", pls: "85%", lg: "400px" }}
//                     borderRadius="15px"
//                     placeholder="Шахзод"
//                   ></Input>
//                 </FormLabel>
//               </Box>
//               <Box>
//                 <Box marginLeft="40px" mt="10px" textColor="red">
//                   {errors.fullName && (
//                     <small id="emailHelp">Неправильный имя</small>
//                   )}
//                 </Box>
//                 <Box></Box>
//               </Box>
//               <Box marginLeft="40px" mt="10px">
//                 <Box></Box>
//                 <Box mt="10px">
//                   <Text fontSize={{ esm: "", pls: "12px" }}>
//                     Введите номер телефона
//                   </Text>
//                   <FormLabel htmlFor="fullName">
//                     <Input
//                       // onChange={phoneChange}
//                       type="number"
//                       {...register("phoneNumber", {
//                         required: "Please enter your phone number.",
//                       })}
//                       id="phoneNumber"
//                       aria-describedby="numberHelp"
//                       mt="10px"
//                       height="40px"
//                       width={{ sm: "300px", pls: "85%", lg: "400px" }}
//                       borderRadius="15px"
//                       placeholder="+998"
//                     ></Input>
//                   </FormLabel>
//                 </Box>
//               </Box>
//               <Box marginLeft="40px" mt="10px" textColor="red">
//                 {errors.phoneNumber && (
//                   <small id="emailHelp">неправильный номер телефона</small>
//                 )}
//               </Box>

//               <Center mt="30px">
//                 {/* <Link href="/Numcod/numcode"> */}

//                 <Button
//                   type="submit"
//                   p={{ md: "25px 60px", esm: "15px 50px", pls: "13px 45px" }}
//                   bg="brand.lightGreen"
//                 >
//                   Войти
//                 </Button>
//                 {/* </Link> */}
//               </Center>
//             </form>
//           </Box>
//         </Center>
//       </Box>
//     </MainLayout>
//   );
// }

// export default register;


// // import { useForm } from 'react-hook-form';
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as Yup from 'yup';

// // export default Home;

// // function Home() {
// //     // form validation rules 
// //     const validationSchema = Yup.object().shape({
// //         title: Yup.string()
// //             .required('Title is required'),
// //         firstName: Yup.string()
// //             .required('First Name is required'),
// //         lastName: Yup.string()
// //             .required('Last name is required'),
// //         dob: Yup.string()
// //             .required('Date of Birth is required')
// //             .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
// //         email: Yup.string()
// //             .required('Email is required')
// //             .email('Email is invalid'),
// //         password: Yup.string()
// //             .min(6, 'Password must be at least 6 characters')
// //             .required('Password is required'),
// //         confirmPassword: Yup.string()
// //             .oneOf([Yup.ref('password'), null], 'Passwords must match')
// //             .required('Confirm Password is required'),
// //         acceptTerms: Yup.bool()
// //             .oneOf([true], 'Accept Ts & Cs is required')
// //     });
// //     const formOptions = { resolver: yupResolver(validationSchema) };

// //     // get functions to build form with useForm() hook
// //     const { register, handleSubmit, reset, formState } = useForm(formOptions);
// //     const { errors } = formState;

// //     function onSubmit(data) {
// //         // display form data on success
// //         alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
// //         return false;
// //     }

// //     return (
// //         <div className="card m-3">
// //             <h5 className="card-header">Next.js - Form Validation Example</h5>
// //             <div className="card-body">
// //                 <form onSubmit={handleSubmit(onSubmit)}>
// //                     <div className="form-row">
// //                         <div className="form-group col">
// //                             <label>Title</label>
// //                             <select name="title" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
// //                                 <option value=""></option>
// //                                 <option value="Mr">Mr</option>
// //                                 <option value="Mrs">Mrs</option>
// //                                 <option value="Miss">Miss</option>
// //                                 <option value="Ms">Ms</option>
// //                             </select>
// //                             <div className="invalid-feedback">{errors.title?.message}</div>
// //                         </div>
// //                         <div className="form-group col-5">
// //                             <label>First Name</label>
// //                             <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.firstName?.message}</div>
// //                         </div>
// //                         <div className="form-group col-5">
// //                             <label>Last Name</label>
// //                             <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.lastName?.message}</div>
// //                         </div>
// //                     </div>
// //                     <div className="form-row">
// //                         <div className="form-group col">
// //                             <label>Date of Birth</label>
// //                             <input name="dob" type="date" {...register('dob')} className={`form-control ${errors.dob ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.dob?.message}</div>
// //                         </div>
// //                         <div className="form-group col">
// //                             <label>Email</label>
// //                             <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.email?.message}</div>
// //                         </div>
// //                     </div>
// //                     <div className="form-row">
// //                         <div className="form-group col">
// //                             <label>Password</label>
// //                             <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.password?.message}</div>
// //                         </div>
// //                         <div className="form-group col">
// //                             <label>Confirm Password</label>
// //                             <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
// //                             <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
// //                         </div>
// //                     </div>
// //                     <div className="form-group form-check">
// //                         <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
// //                         <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
// //                         <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
// //                     </div>
// //                     <div className="form-group">
// //                         <button type="submit" className="btn btn-primary mr-1">Register</button>
// //                         <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }
import { Box, Button, Center, Checkbox, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Imputpassword from "../../src/Components/Imputpassword";
import MainLayout from "../../src/Layout/MainLayout";

function register() {
  return (
    <MainLayout>
      <Box mb={'40px'}>
        <Text textAlign="center" fontSize={{ pls: "27px", smm: "32px", esm: '35px', sm: "44px", md: "50px", lg: "52px" }}>
          Регистрация
        </Text>
        <Center mt="10px">
          <Box
            maxHeight="500px"
            width="500px"
            bg="white"
            pb={'20px'}
            borderRadius="15px"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          >
            <Box marginLeft="40px" mt="20px">
              <Text fontSize={{ esm: "", pls: "12px" }}>Введите логин</Text>
              <Input
                mt="10px"
                height="40px"
                width={{ sm: "300px", pls: '85%', lg: '400px' }}
                borderRadius="15px"
                placeholder="Шахзод"
              ></Input>
            </Box>
           
            <Box marginLeft="40px" mt="10px">
            
              <Box mt="10px">
                <Text fontSize={{ esm: "", pls: "12px" }}>Введите номер для получения кода</Text>
                <Input
                  mt="10px"
                  height="40px"
                  width={{ sm: "300px", pls: '85%', lg: '400px' }}
                  borderRadius="15px"
                  placeholder="+998"
                ></Input>
              </Box>
            </Box>

            <Center mt="30px">
              <Link href="/Numcod/numcode">
                <Button p={{ md: "25px 60px", esm: '15px 50px', pls: "13px 45px" }} bg="brand.lightGreen">
                  Войти
                </Button>
              </Link>
            </Center>
          </Box>
        </Center>
      </Box>
    </MainLayout>
  );
}

export default register;
