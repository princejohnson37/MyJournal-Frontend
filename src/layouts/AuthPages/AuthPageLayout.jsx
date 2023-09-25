import { Container, Grid } from "@mui/material";
import cover from "../../assets/Images/coverImage.jpg";

function AuthPageLayout(props) {
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
        <Container sx={{ width: "50%" }}>{props.children}</Container>
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

export default AuthPageLayout;
