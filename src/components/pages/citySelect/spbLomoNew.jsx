import React from "react";
import { eventData } from "../../data/eventsDataSpbLomo";
import gallery from "../../data/gallerySpbLomo";
import menu from "../../data/menuSpbLomo";
import Header from "../header/header";
import logo from "../../../image/logoYellow.svg";
import WelcomeLomo from "../welcome/welcomeLomo";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";
import Events from "../events/events";
import BarMenu from "../menu/barMenuSpbLomo";
import Contacts from "../contacts/contacts";

const SpbLomo = () => {
  return (
    <>
      <Header logo="https://i.postimg.cc/Xq0D73tm/yellow-Logo.png" />
      <WelcomeLomo />
      <Events eventData={eventData} />
      <BarMenu menu={menu} />
      <Gallery gallery={gallery} />
      <Contacts
        mapLink="https://yandex.ru/map-widget/v1/-/CCURyBgWWD"
        time="пн-вс 16:00-06:00"
        adress="Грибоедова 28/1"
        phone="Тел: +7 (812) 425 3090"
        tgLink="https://t.me/elchapo_grande"
        instaLink="https://www.instagram.com/elchapo.spb/"
        vkLink="https://vk.com/elchapo_spb"
      />
      <Footer footerImg={logo} />
    </>
  );
};

export default SpbLomo;
