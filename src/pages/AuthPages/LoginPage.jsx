import { Container, Grid } from "@mui/material";
import AuthTextInput from "../../components/AuthPages/AuthTextInput";
import SignButton from "../../components/AuthPages/SignButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInSchema } from "../../formik/validations";
import apiClient from "../../api/apiClient";
import { LOGIN } from "../../constants/constants";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    signInSchema,
    onSubmit: (values) => {
      const data = {
        user_email: values.email,
        user_password: values.password,
      };
      console.log(data);
      console.log(LOGIN);
      apiClient(LOGIN, data);
    },
  });
  return (
    <Grid container>
      <Grid item>
        <Container>
          <AuthTextInput
            placeholder={"email"}
            inputType={"email"}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <AuthTextInput
            placeholder="password"
            inputType="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <SignButton
            label={"SignIn"}
            type={"submit"}
            onClick={formik.handleSubmit}
          />
        </Container>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default LoginPage;
