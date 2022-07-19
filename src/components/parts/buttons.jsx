import React from "react";
import s from "./parts.module.css";

export const YellowButton = (props) => {
  return <button className={s.yellowButton}>{props.title}</button>;
};

export const MenuButton = (props) => {
  return <button className={s.menuButton}>{props.title}</button>;
};

export const LinkButton = (props) => {
  return (
    <a
      className={s.linkButton}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  );
};

export const OutlinedButton = (props) => {
  return <button className={s.outlinedButton}>{props.title}</button>;
};
