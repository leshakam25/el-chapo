// import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlockTitle from "../../parts/blockTitle";
import PrivacyButton from "../../parts/buttons/privacyButton";
import SocialButton from "../../parts/buttons/socialButton";

const Contacts = (props) => {
  return (
    <Container id="contacts" maxWidth="xl">
      <Box sx={{ color: "white", position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <iframe
            title="map"
            src={props.mapLink}
            width="97%"
            height="440px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: "7%",
            left: "5%",
            bgcolor: "black",
            padding: { xs: "0", md: "20px 60px" },
          }}
        >
          <BlockTitle title="КОНТАКТЫ" />
          <Typography fontWeight="normal" fontFamily="Oswald">
            Мы находимся:
          </Typography>
          <Typography fontFamily="Oswald" fontWeight="light" gutterBottom>
            {props.adress} <br /> {props.phone}
          </Typography>
          <Typography fontFamily="Oswald" fontWeight="normsl">
            время работы:
          </Typography>
          <Typography fontFamily="Oswald" fontWeight="light" gutterBottom>
            {props.time}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <SocialButton title="TG" link={props.tgLink} />
            <SocialButton title="INSTA" link={props.instaLink} />
            <SocialButton title="VK" link={props.vkLink} />
          </Box>
          <Box>
            <PrivacyButton
              title="Политика конфиденциальности"
              color="white"
              fz="14px"
            />
          </Box>
        </Box>
        {/* </motion.div> */}
      </Box>
      {/* </motion.div> */}
    </Container>
  );
};

export default Contacts;
