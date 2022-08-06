import { CardMedia, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = (props) => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "80px", width: "100%" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ width: "80vw" }}
          component="img"
          src={props.footerImg}
        />
      </Box>
    </Container>
  );
};

export default Footer;
