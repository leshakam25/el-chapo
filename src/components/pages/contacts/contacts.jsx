import { motion } from "framer-motion";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PrivacyButton from "../../parts/buttons/privacyButton";

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Contacts = () => {
  return (
    <Container id="contacts" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <motion.div initial="hidden" whileInView="visible">
        <Box sx={{ color: "white", position: "relative" }}>
          <motion.div custom={2} variants={textAnimation}>
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CCUNnCDnoD"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div custom={2} variants={textAnimation}>
            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "5%",
                bgcolor: "black",
                padding: "60px 80px",
                paddingRight: "180px",
              }}
            >
              <Typography
                variant="h5"
                fontFamily="Oswald"
                fontWeight="normal"
                gutterBottom
              >
                КОНТАКТЫ
              </Typography>
              <br />{" "}
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
              <Box>
                <Typography fontFamily="Oswald">TG</Typography>
                <Typography fontFamily="Oswald">INSTA</Typography>
                <Typography fontFamily="Oswald">VK</Typography>
              </Box>
              <br />
              <Box>
                <PrivacyButton
                  title={"Политика конфеденциальности"}
                  color="white"
                  fz="14px"
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contacts;
