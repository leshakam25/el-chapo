import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container id="about" sx={{ paddingTop: "80px" }} maxWidth="xl">
      <Box sx={{ color: "white" }}>
        {" "}
        <Typography
          sx={{ margin: "12px 0" }}
          fontFamily="Oswald"
          fontWeight="bold"
          variant="h2"
        >
          El chapo
        </Typography>
        <Box sx={{ height: "3px", bgcolor: "#f2ee6f", width: "300px" }}></Box>
        <Typography
          sx={{ margin: "12px 0" }}
          fontFamily="Oswald"
          fontWeight="bold"
          variant="h2"
        >
          Открытие El Chapo Grande в Санкт-Петербурге!{" "}
        </Typography>
        <Typography
          sx={{ margin: "12px 0" }}
          fontFamily="Oswald"
          fontWeight="light"
          variant="body1"
          fontSize="26px"
          textAlign="justify"
        >
          27 июля в Северной Столице открывается третий (и второй в Петербурге)
          проект сети El Chapo. К имени самого известного наркобарона добавилась
          приставка Grande. Гранде обещает стать самым ярким проектом сети и
          одним из самых востребованных в городе. Формат заведения изменится –
          теперь это полноценный трёхэтажный ресторан, с дневной посадкой и
          бóльшим упором на кухню. Меню изменилось в сторону файн дайнинга,
          проект немного подустал от мексиканской классики, которая представлена
          в двух других заведениях сети. Коктейльная карта также получила более
          гастрономический уклон – больше вариаций коктейлей и необычных
          сочетаний, в основе импорт из Южной Америки и домашние настойки.
          Заведение открывается в полдень, поэтому днём здесь можно застать как
          компашки коллег, собравшихся для совместного ланча (до 16:00 в
          ресторане скидка на всё меню), так и гедонистов, чей день начинается с
          бокала игристого или Беллини. Вечерами здесь танцуют, по выходным
          играет живая музыка, к привычному латино-репертуару добавился джаз.
          Проект открывает не изменившаяся с первого Эль Чапо питерская команда.
          Новизну концепции рестораторы для себя объясняют поиском нового
          потолка. Театральность классического Эль Чапо успела завоевать сердца
          многих гостей. El Chapo Grande откроется по-соседству с Подписными
          Изданиями, на Литейном проспекте, 57. Есть шанс, что заведение
          откроется в техническом режиме уже в ближайшие дни, но точной
          информации нет. Известно одно – официальное открытие запланировано на
          среду, 27 июля. Кстати, на открытии разыграют путёвку в Мексику на
          двоих – информация об этом размещена в соц. сетях ресторана.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
