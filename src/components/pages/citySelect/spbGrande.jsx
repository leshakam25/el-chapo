import React from "react";
import { eventData } from "../../data/eventsDataSpbGrande";
import Contacts from "../contacts/contacts";
import Events from "../events/events";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import BarMenu from "../menu/barMenuSpbGrande";
import Welcome from "../welcome/welcome";
import logo from "../../../image/logoGrande.svg";
import menu from "../../data/menuSpbGrande";
import gallery from "../../data/gallerySpbGrande";

const SpbGrande = () => {
  return (
    <>
      <Header logo={logo} />
      <Welcome />
      <Events eventData={eventData} />
      <BarMenu menu={menu} />
      <Gallery gallery={gallery} />
      <Contacts
        mapLink="https://yandex.ru/map-widget/v1/-/CCURQLvQWB"
        time="пн-вс 12.00–6.00"
        adress="Литейный проспект, 57"
        phone="Тел: +7 (812) 425 3090"
        tgLink="https://t.me/elchapo_grande"
        instaLink="https://www.instagram.com/elchapo_grande/"
        vkLink="https://vk.com/elchapo_spb"
      />
      <Footer footerImg={logo} />
    </>
  );
};

export default SpbGrande;
