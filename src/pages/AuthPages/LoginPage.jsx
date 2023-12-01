import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Radio,
} from "@mui/material";
import AuthTextInput from "../../components/AuthPages/AuthTextInput";
import SignButton from "../../components/AuthPages/SignButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInSchema } from "../../formik/validations";
import apiClient from "../../api/apiClient";
import { LOGIN } from "../../constants/constants";
import ImageContainer from "../../components/AuthPages/ImageContainer";
import cover from "../../assets/Images/coverImage.jpg";
import { Box } from "@mui/system";
import "./LoginPage.scss";
import emailIcon from "../../assets/icons/mail.svg";
import passwordIcon from "../../assets/icons/password.svg";

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
      <Grid
        className="signup-form-wrapper"
        item
        md={6}
        sm={12}
        sx={{
          backgroundColor: "background.default",
          width: "100%",
        }}
      >
        <Container maxWidth="sm" className="signup-form-conatiner-main">
          <Box>
            <p className="Welcome-text">Welcome</p>
          </Box>
          <Box className="signup-form-conatiner">
            <AuthTextInput
              icon={emailIcon}
              placeholder={"Email"}
              type={"email"}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <AuthTextInput
              icon={passwordIcon}
              placeholder="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Box className="password-container">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Remember me"
              />
              <Link
                underline="none"
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Forgot Password
              </Link>
              {/* <span>Forgot Password? </span> */}
            </Box>
            <SignButton
              variant="contained"
              label={"Sign In"}
              type={"submit"}
              onClick={formik.handleSubmit}
            />
            <Box className="login-form-footer-conatiner">
              <p className="login-form-footer">
                Don’t have a account?<span>Sign Up</span>
              </p>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid
        item
        md={6}
        sm={false}
        sx={{
          backgroundImage: `url(${cover})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        {/* <ImageContainer /> */}
      </Grid>
    </Grid>
  );
}

export default LoginPage;
