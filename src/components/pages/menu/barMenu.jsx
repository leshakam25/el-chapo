import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BarMenuButton from "../../parts/buttons/barMenuButton";
import RegistryButton from "../../parts/buttons/registryButton";

const BarMenuSpbGrande = (props) => {
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
              fontSize="44px"
              fontWeight="bold"
            >
              НАШЕ МЕНЮ
            </Typography>
          </Box>
          <Box sx={{ height: "3px", bgcolor: "#f2ee6f", width: "238px" }}></Box>
          <Box sx={{ margin: "12px 0" }}>
            <Typography
              fontFamily="Oswald"
              variant="h4"
              textAlign="justify"
              color="#f2ee6f"
              fontWeight="bold"
            >
              {props.title}
            </Typography>
            <br />
            <Typography
              fontFamily="Oswald"
              variant="body1"
              textAlign="justify"
              gutterBottom
              fontSize="24px"
            >
              {props.subtitle1} <br />
              {props.subtitle2} <br />
              {props.subtitle3}
            </Typography>
            <Typography fontFamily="Oswald" variant="h5" textAlign="justify">
              {props.adress}
            </Typography>
            <br />
            <Box>
              <BarMenuButton
                title="Смотреть меню Эль-Чапо"
                menu={props.menu}
                menuTitle={
                  <Typography
                    fontFamily="Oswald"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "22px", md: "42px" },
                      lineHeight: "1",
                    }}
                  >
                    Меню иммерсивного ресторана Эль-Чапо
                  </Typography>
                }
              />
              <RegistryButton title="Бронируй стол, Амиго" />
            </Box>
          </Box>
        </Box>
        <Box>{props.rightBlock}</Box>
      </Box>
    </Container>
  );
};

export default BarMenuSpbGrande;
