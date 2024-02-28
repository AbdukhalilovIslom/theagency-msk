import React from "react";
import classes from "./styles.module.css";
import callButton from "../../../assets/icons/callButton.svg";
import Image from "next/image";

export default function CallButton() {
  return (
    <div className={classes.button_wrapper}>
      <Image
        src={callButton}
        alt="CallButton"
        width={49}
        height={49}
        className={classes.button}
      />
    </div>
  );
}
