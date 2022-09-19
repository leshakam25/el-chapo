import React from "react";
import { discountData } from "../../data/discountSpbGrande";
import { eventData, eventDataVideo } from "../../data/eventsDataSpbGrande";
import logo2 from "../../../image/logoGrande2.svg";
import Contacts from "../contacts/contacts";
import Events from "../events/events";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import BarMenu from "../menu/barMenu";
import Welcome from "../welcome/welcome";
import logo from "../../../image/logoGrande.svg";
import menu from "../../data/menuSpbGrande";
import gallery from "../../data/gallerySpbGrande";
import Chief from "../menu/cheif";
import s from "./cities.module.css";
import Discount from "../discount/discount";

const SpbGrande = () => {
  return (
    <div className={s.cityWrapper}>
      <Header
        logo={logo}
        textColor="black"
        backgroundColor="#f2ee6f"
        border="2px solid white"
        hoverBorder="none"
        hoverBg="black"
        hoverTextColor="white"
      />
      <Welcome
        title="ДОБРО ПОЖАЛОВАТЬ В МЕКСИКУ!"
        logo={logo2}
        subtitle="EL Chapo Grande – это иммерсивный бар, где каждый может
        погрузиться в мир мексиканской культуры и её незабываемого колорита."
        subtitle2="Огненная текила, ароматы специй, ритмы латино с
        вкраплениями фанка и диско захлестнут улицу любого города,
        где есть бар EL Chapo"
        adress="Литейный проспект, 57"
        bg="https://i.postimg.cc/4N1yfCSJ/image-223-1.png"
        // registry button
        textColor="black"
        backgroundColor="#f2ee6f"
        border="2px solid white"
        hoverBorder="none"
        hoverBg="black"
        hoverTextColor="white"
      />
      <Discount discountData={discountData} />
      <Events eventData={eventData} eventVideo={eventDataVideo} />
      <BarMenu
        menu={menu}
        title="-30% на всё меню!"
        subtitle1="Каждый будний день с 12:00 до 17:00."
        subtitle2="Поработали над отдачей, чтобы исключить задержки."
        subtitle3="Топовые блюда от нашего шефа по лучшей цене???"
        adress="С-ПБ / Литейный, 57"
        rightBlock={<Chief />}
        // registry button

        textColor="black"
        backgroundColor="#f2ee6f"
        border="2px solid white"
        hoverBorder="none"
        hoverBg="black"
        hoverTextColor="white"
      />
      <Gallery gallery={gallery} />
      <Contacts
        mapLink="https://yandex.ru/map-widget/v1/-/CCURQLvQWB"
        time="ПН-ВС 12.00–6.00 / ВС-ЧТ с 12:00-01:00"
        adress="Литейный проспект, 57"
        phone="Тел: +7 (812) 425 3090"
        tgLink="https://t.me/elchapo_grande"
        instaLink="https://www.instagram.com/elchapo_grande/"
        vkLink="https://vk.com/elchapo_spb"
      />
      <Footer footerImg={logo} />
    </div>
  );
};

export default SpbGrande;
