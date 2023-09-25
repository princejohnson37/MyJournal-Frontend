import { Container, Grid } from "@mui/material";
import cover from "../../assets/Images/coverImage.jpg";
import PropTypes from 'prop-types';

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

AuthPageLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthPageLayout;
