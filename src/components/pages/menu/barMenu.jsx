import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlockTitle from "../../parts/blockTitle";
import BarMenuButton from "../../parts/buttons/barMenuButton";
import DeliveryButton from "../../parts/buttons/deliveryButton";
import MenuButton from "../../parts/buttons/menuButton";
import RegistryButton from "../../parts/buttons/registryButton";

const BarMenuSpbGrande = (props) => {
  return (
    <Container id="menu" maxWidth="xl">
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
          <BlockTitle title="НАШЕ МЕНЮ" />
          <Box sx={{ margin: "12px 0" }}>
            <Typography
              fontFamily="Oswald"
              variant="h4"
              textAlign="justify"
              color="#f2ee6f"
              fontWeight="bold"
            >
              {props.title}
            </Typography>{" "}
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
              />{" "}
              {/* <DeliveryButton
                title="ЗАКАЖИ ДОСТАВКУ"
                backgroundColor={props.backgroundColor}
                border={props.border}
                textColor={props.textColor}
                hoverBg={props.hoverBg}
                hoverBorder={props.hoverBorder}
                hoverTextColor={props.hoverTextColor}
              /> */}
              <RegistryButton
                title="Бронируй стол, Амиго"
                backgroundColor={props.backgroundColor}
                border={props.border}
                textColor={props.textColor}
                hoverBg={props.hoverBg}
                hoverBorder={props.hoverBorder}
                hoverTextColor={props.hoverTextColor}
              />
            </Box>
          </Box>
        </Box>
        <Box>{props.rightBlock}</Box>
      </Box>
    </Container>
  );
};

export default BarMenuSpbGrande;
