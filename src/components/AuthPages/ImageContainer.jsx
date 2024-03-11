import { Box } from "@mui/material";
import cover from "../../assets/Images/coverImage.jpg";

const ImageContainer = () => {
  return (
    <Box
      component="img"
      sx={{
        height: "100vh",
        width: "100%",
        objectFit: "cover",
      }}
      alt="The house from the offer."
      src={cover}
    />
  );
};

export default ImageContainer;
