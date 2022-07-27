import { CardMedia, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import logo from "../../../image/logo.svg";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "80px", width: "100%" }}>
      <motion.div initial="hidden" whileInView="visible">
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div custom={2} variants={textAnimation}>
            <CardMedia sx={{ width: "80vw" }} component="img" src={logo} />
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Footer;
