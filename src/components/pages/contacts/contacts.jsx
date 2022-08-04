// import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PrivacyButton from "../../parts/buttons/privacyButton";
import SocialButton from "../../parts/buttons/socialButton";

// const textAnimation = {
//   hidden: { x: 100, opacity: 0 },
//   visible: (custom) => ({
//     x: 0,
//     opacity: 1,
//     transition: { duration: custom * 0.3, delay: custom * 0.2 },
//   }),
// };

const Contacts = () => {
  return (
    <Container id="contacts" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      {/* <motion.div initial="hidden" whileInView="visible"> */}
      <Box sx={{ color: "white", position: "relative", overflow: "hidden" }}>
        {/* <motion.div custom={2} variants={textAnimation}> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/-/CCURQLvQWB"
            width="97%"
            height="600"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
        {/* </motion.div> */}
        {/* <motion.div custom={2} variants={textAnimation}> */}
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
            Литейный проспект, 57 <br /> Тел: +7 (812) 425 3090
          </Typography>
          <Typography fontFamily="Oswald" fontWeight="normsl">
            время работы:
          </Typography>
          <Typography fontFamily="Oswald" fontWeight="light" gutterBottom>
            пн-вс 12.00–6.00
          </Typography>
          <br />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <SocialButton title="TG" link="https://t.me/elchapo_grande" />
            <SocialButton
              title="INSTA"
              link="https://www.instagram.com/elchapo_grande/"
            />
            <SocialButton title="VK" link="https://vk.com/elchapo_spb" />
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
