import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const Poster = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        fontWeight="bold"
        fontFamily="Oswald"
        color="white"
        gutterBottom
      >
        Ночные тусы
      </Typography>
      <Box sx={{ height: "3px", bgcolor: "#f2ee6f", maxWidth: "420px" }}></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box sx={{ mx: 6 }}>
          <ReactPlayer
            height="560px"
            width="320px"
            url="https://youtube.com/shorts/s-lzbjj5Gzg?feature=share"
          />
        </Box>
        <Box sx={{ mx: 6 }}>
          <ReactPlayer
            height="560px"
            width="320px"
            url="https://youtube.com/shorts/fEfdbYfCG3Q?feature=share"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Poster;
