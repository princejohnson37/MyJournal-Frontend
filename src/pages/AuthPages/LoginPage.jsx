import { Container, Grid } from "@mui/material";
import AuthTextInput from "../../components/AuthPages/AuthTextInput";
import SignButton from "../../components/AuthPages/SignButton";

function LoginPage() {
  return (
    <Grid container>
      <Grid item>
        <Container>
          <AuthTextInput placeholder={"email"} inputType={"email"} />
          <AuthTextInput placeholder={"password"} inputType={"password"} />
          <SignButton label={"SignIn"}/>
        </Container>
      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  );
}

export default LoginPage;
