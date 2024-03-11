import React from "react";
import AuthTextInput from "../../components/AuthPages/AuthTextInput";
import SignButton from "../../components/AuthPages/SignButton";
import { useFormik } from "formik";
import { signInSchema } from "../../formik/validations";
import apiClient from "../../api/apiClient";
import { LOGIN, REGISTER } from "../../constants/constants";
import ImageContainer from "../../components/AuthPages/ImageContainer";
import cover from "../../assets/Images/coverImage.jpg";
import { Box } from "@mui/system";
import emailIcon from "../../assets/icons/mail.svg";
import passwordIcon from "../../assets/icons/password.svg";
import classes from "./LoginPage.module.scss";
import { Navigate } from "react-router";

function SignUpPage() {
  const formik = useFormik({
    initialValues: {
        fullName:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    signInSchema,
    onSubmit: (values) => {
      const data = {
        user_email: values.email,
        user_password: values.password,
      };
      console.log(data);
      apiClient(REGISTER, data);
    },
  });
  return (
    <>
      <Box>
        <p className={classes["welcome-text"]}>Register</p>
      </Box>
      <Box className={classes["signup-form-conatiner"]}>
      <AuthTextInput
          icon={emailIcon}
          placeholder={"Full Name"}
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <AuthTextInput
          icon={emailIcon}
          placeholder={"email"}
          inputType={"email"}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <AuthTextInput
          icon={passwordIcon}
          placeholder="password"
          inputType="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <AuthTextInput
          icon={passwordIcon}
          placeholder="confirm password"
          inputType="password"
          name="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <SignButton
          label={"Sign Up"}
          type={"submit"}
          onClick={formik.handleSubmit}
        />
        <Box className={classes["login-form-footer-conatiner"]}>
          <p className={classes["login-form-footer"]}>
            Have an account?<span onClick={<Navigate to={"/"}/>}>Login</span>
          </p>
        </Box>
      </Box>
    </>
  );
}

export default SignUpPage;
