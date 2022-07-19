import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { LinkButton } from "../../parts/buttons";

const Contacts = () => {
  const privacy = () => {
    window.location.href = "http://elchapogrande.store/grande-rf/privacy";
  };

  return (
    <Container maxWidth="xl" sx={{ marginY: "120px " }}>
      <Box sx={{ color: "white", position: "relative" }}>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUNnCDnoD"
          width="100%"
          height="600"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            bgcolor: "black",
            padding: "60px 40px",
          }}
        >
          <Typography gutterBottom>КОНТАКТЫ</Typography>
          <Typography>Мы находимся:</Typography>
          <Typography gutterBottom>
            Литейный проспект, 57 Тел: +7 (812) 425 3090
          </Typography>
          <Typography gutterBottom>
            <ul>
              <li>TG</li>
              <li>INSTA</li>
              <li>VK</li>
            </ul>
          </Typography>
          <Typography>
            <LinkButton
              link="http://elchapogrande.store/grande-rf/privacy"
              title=" Политика конфиденциальности"
            />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contacts;
