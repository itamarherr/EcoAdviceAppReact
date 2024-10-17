import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import *  as Yup from 'yup'
import Spinner from '../components/Spinner';
import { dialogs } from '../dialogs/Dialogs';
import { auth } from '../services/Auth-service';
import { useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Login = () => {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string>();

const navigate = useNavigate();
const {login} = useAuth();

  const validationSchema = Yup.object({
    email:Yup.string().email('Bad Email!').required('The email field is required'),
    password: Yup.string().required("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character").min(8).max(20).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,30}$/)
  });
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={(o) => {
      setIsLoading(true);
      auth
      .login(o.email, o.password)
      .then((response) => {
        dialogs.success("Login Successful")
        .then(()=>{
          login(response.data.token);

          navigate("/");
        });
      })
      .catch((error) => {
        dialogs.error("Login Faild");
      })
      .finally(()=> {
        setIsLoading(false);
      });
    }}
    >
    <Form className="flex flex-col items-center mt-20">
    <h1 className="text-center font-bold text-2xl">Login</h1>
    {isLoading && <Spinner/>}
    {error && <p className='text0red-500'>{error}</p>}
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
    disabled={isLoading}
    type="submit"
    className="rounded-md bg-green-800 disabled:bg-green-800/50 hover:bg-green-600 w-1/2 mx-auto flex text-center hover:bg-green-900e text-white font-bold py-2 px-4 mt-7 border"
    >
      Login
    </button>
    </Form>
      </Formik>
  );
};
export default Login