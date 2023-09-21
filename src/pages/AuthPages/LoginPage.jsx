import { Container, FormControlLabel, Grid, Radio } from "@mui/material";
import AuthTextInput from "../../components/AuthPages/AuthTextInput";
import SignButton from "../../components/AuthPages/SignButton";
import ImageContainer from "../../components/AuthPages/ImageContainer";
import cover from "../../assets/Images/coverImage.jpg";
import { Box } from "@mui/system";
import "./LoginPage.scss";
import emailIcon from "../../assets/icons/mail.svg";
import passwordIcon from "../../assets/icons/password.svg";

function LoginPage() {
  return (
    <Grid container>
      <Grid
        className="signup-form-conatiner-main"
        item
        md={6}
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <Container sx={{ width: "70%" }}>
          <Box>
            <p className="Welcome-text">Welcome</p>
          </Box>
          <Box className="signup-form-conatiner">
            <AuthTextInput
              icon={emailIcon}
              placeholder={"Email"}
              inputType={"email"}
            />
            <AuthTextInput
              icon={passwordIcon}
              placeholder={"Password"}
              inputType={"password"}
            />
            <Box className="password-container">
              <FormControlLabel
                value="end"
                control={<Radio />}
                label="Remember me"
              />
              <span>Forgot Password? </span>
            </Box>
            <SignButton label={"SignIn"} />
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
