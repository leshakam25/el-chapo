// import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PrivacyButton from "../../parts/buttons/privacyButton";
import SocialButton from "../../parts/buttons/socialButton";

const Contacts = (props) => {
  return (
    <Container id="contacts" maxWidth="xl" sx={{ paddingTop: "80px" }}>
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
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "8%",
            left: "5%",
            bgcolor: "black",
            padding: "40px 60px",
            paddingRight: "180px",
          }}
        >
          <Typography
            variant="h2"
            fontFamily="Oswald"
            fontWeight="normal"
            gutterBottom
          >
            КОНТАКТЫ
          </Typography>
          <Box
            sx={{
              height: "3px",
              bgcolor: "#f2ee6f",
              maxWidth: "100%",
              mb: 6,
            }}
          ></Box>
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
          <br />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <SocialButton title="TG" link={props.tgLink} />
            <SocialButton title="INSTA" link={props.instaLink} />
            <SocialButton title="VK" link={props.vkLink} />
          </Box>
          <br />
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
