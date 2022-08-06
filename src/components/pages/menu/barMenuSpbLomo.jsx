import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BarMenuButton from "../../parts/buttons/barMenuButton";

const BarMenuSpbLomo = (props) => {
  return (
    <Container id="menu" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* left */}
        <Box sx={{ maxWidth: "720px" }}>
          <Box>
            <Typography
              sx={{ margin: "12px 0", fontFamily: "Oswald" }}
              variant="h2"
              fontWeight="bold"
            >
              НАШЕ МЕНЮ
            </Typography>
          </Box>
          <Box sx={{ height: "3px", bgcolor: "#f2ee6f", width: "315px" }}></Box>
          <Box sx={{ margin: "12px 0" }}>
            <Typography
              fontFamily="Oswald"
              variant="h4"
              textAlign="justify"
              color="#f2ee6f"
              fontWeight="bold"
            >
              -30% на всё меню!
            </Typography>
            <br />
            <Typography
              fontFamily="Oswald"
              variant="body1"
              textAlign="justify"
              gutterBottom
              fontSize="24px"
            >
              Каждый будний день с 12:00 до 17:00. <br />
              <br /> Поработали над отдачей, чтобы исключить задержки. <br />{" "}
              <br />
              Топовые блюда от нашего шефа по лучшей цене???
            </Typography>
            <Typography fontFamily="Oswald" variant="h5" textAlign="justify">
              С-ПБ / Ломоносова, 1
            </Typography>
            <BarMenuButton
              title="Смотреть меню Эль-Чапо"
              menu={props.menu}
              menuTitle="Меню мексиканского ресторана Эль-Чапо"
            />
          </Box>
        </Box>
        <Box sx={{ maxWidth: "500px", m: 12 }}>
          <Typography variant="h4" fontFamily="Oswald" gutterBottom>
            WELCOME AMIGOS!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BarMenuSpbLomo;
