import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LinkButton from "../../parts/buttons/linkButton";

const Contacts = () => {
  const privacy = () => {
    window.location.href = "http://elchapogrande.store/grande-rf/privacy";
  };

  return (
    <Container id="contacts" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <Box sx={{ color: "white", position: "relative" }}>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUNnCDnoD"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
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
            <LinkButton
              link="http://elchapogrande.store/grande-rf/privacy"
              title=" Политика конфиденциальности"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contacts;
