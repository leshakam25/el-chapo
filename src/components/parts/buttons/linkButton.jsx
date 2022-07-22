import React from "react";
import s from "../parts.module.css";

const LinkButton = (props) => {
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

export default LinkButton;
