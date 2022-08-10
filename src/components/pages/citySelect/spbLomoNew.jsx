import React from "react";
import s from "./cities.module.css";
import { eventData, eventDataVideo } from "../../data/eventsDataSpbGrande";
import gallery from "../../data/gallerySpbLomo";
import menu from "../../data/menuSpbLomo";
import Header from "../header/header";
import logo from "../../../image/logoLomo.svg";
import Welcome from "../welcome/welcome";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";
import Events from "../events/events";
import BarMenu from "../menu/barMenu";
import Contacts from "../contacts/contacts";

const SpbLomo = () => {
  return (
    <div className={s.cityWrapper}>
      <Header logo={logo} />
      <Welcome
        title="МЕКСИКА, МЕКСИКА"
        logo={logo}
        subtitle="Бар на Ломоносова про аутентичную Мексику  "
        subtitle2="В меню
        классические блюда в авторской вариации (тако, буррито,
        кесадилья) и шумные вечеринки под латино до утра. Для любителей
        попикантнее - в баре также подают самую острую чимичангу в
        городе, правда съесть ее можно только подписав специальный
        контракт."
        adress="Ломоносова 1 / Грибоедова 28"
        bg="https://i.postimg.cc/cL0JVnCG/bg-spb-lomo-png.png"
      />
      <Events eventData={eventData} eventVideo={eventDataVideo} />
      <BarMenu
        menu={menu}
        title="МЕКСИКА МЕКСИКА"
        subtitle1="Каждый день с 16:00-06:00"
        subtitle2=""
        subtitle3="Топовые блюда от нашего шефа по лучшей цене???"
        adress="С-Пб, Грибоедова 28 / Ломоносова 1"
        rightBlock={null}
      />
      <Gallery gallery={gallery} />
      <Contacts
        mapLink="https://yandex.ru/map-widget/v1/-/CCURyBgWWD"
        time="пн-вс 16:00-06:00"
        adress="С-Пб, Грибоедова 28 / Ломоносова 1"
        phone="Тел: +7 (812) 425 3090"
        tgLink="https://t.me/elchapo_grande"
        instaLink="https://www.instagram.com/elchapo.spb/"
        vkLink="https://vk.com/elchapo_spb"
      />
      <Footer footerImg={logo} />
    </div>
  );
};

export default SpbLomo;
