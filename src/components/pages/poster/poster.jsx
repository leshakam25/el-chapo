import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import React from "react";
import ReactPlayer from "react-player";

const textAnimation = {
  hidden: { x: 220, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.5, delay: custom * 0.2 },
  }),
};

const Poster = () => {
  return (
    <Container id="events" maxWidth="xl">
      <motion.div initial="hidden" whileInView="visible">
        <motion.div custom={1} variants={textAnimation}>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Oswald"
            color="white"
            gutterBottom
          >
            Вечеринки
          </Typography>
          <Box
            sx={{ height: "3px", bgcolor: "#f2ee6f", maxWidth: "274px" }}
          ></Box>
        </motion.div>
        <motion.div custom={2} variants={textAnimation}>
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
                url="https://youtube.com/shorts/WfkWg9HWbUg?feature=share"
              />
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Poster;
