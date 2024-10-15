import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import *  as Yup from 'yup'

const Register = () => {

  const validationSchema = Yup.object({
    email:Yup.string().email('Bad Email!').required('The email field is required'),
    username: Yup.string().required("The User Name field is required").min(2).max(20),
    password: Yup.string().required("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character").min(8).max(20).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,30}$/),
  });
  const initialValues = {
    email: "",
    username: "",
    password: ""
  };
  return (
    <Formik
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={(o) => {
      alert(o.email);
    }}
    >
   
    <Form className="mt-20">
    <h1 className="text-center font-bold text-2xl">REGISTER FORM</h1>
    <div className="font-extralight form-group flex flex-col gap-2 w-1/2 mx-auto text-lg">
      <label  className="px-2 py-2 mt-4" htmlFor="username">User Name</label>
      <Field 
      name="username" 
      type="username" 
      id="username" 
      className="rounded-md active:border-2 border-green-300 hover:border-green-500 border-2 px-1 py-2"
      />
      <ErrorMessage 
      name="username" 
      component="div" 
      className="text-red-500"/>
    </div>
    <div className="font-extralight form-group flex flex-col gap-2 w-1/2 mx-auto text-lg">
      <label  className="px-2 py-2 mt-4" htmlFor="email">Email Address</label>
      <Field 
      name="email" 
      type="email" 
      id="email" 
      className="rounded-md active:border-2 border-green-300 hover:border-green-500 border-2 px-1 py-2"
      />
      <ErrorMessage 
      name="email" 
      component="div" 
      className="text-red-500"/>
    </div>
    <div className="font-extralight form-group flex flex-col gap-2 w-1/2 mx-auto text-lg">
      <label className="px-2 py-2 mt-4" htmlFor="password">Password</label>
      <Field 
      name="password" 
      type="password" 
      id="password" 
      className="rounded-md active:border-2 border-green-300 hover:border-green-500 border-2 px-1 py-2"
      />
      <ErrorMessage 
      name="password" 
      component="div" 
      className="text-red-500" />
    </div>
    
    <button
    type="submit"
    className="rounded-md bg-green-800 hover:bg-green-600 w-1/2 mx-auto flex text-center hover:bg-green-900e text-white font-bold py-2 px-4 mt-7 border"
    >
      Register

    </button>
    </Form>
      </Formik>
  );
};

export default Register