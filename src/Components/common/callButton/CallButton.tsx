"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import callButton from "../../../assets/icons/callButton.svg";
import tg from "../../../assets/icons/calltg.svg";
import insta from "../../../assets/icons/callinsta.svg";
import cross from "../../../assets/icons/blackcross.svg";
import Image from "next/image";

export default function CallButton() {
  const [open, setOpen] = useState("none");

  const handleChange = () => {
    if (open === "opened") {
      setOpen("closed");
    } else {
      setOpen("opened");
    }
  };
  return (
    <div className={classes.button_wrapper}>
      <div className={`${classes.buttons} ${classes[open]}`}>
        <Image
          src={insta}
          alt="CallButton"
          width={49}
          height={49}
          className={classes.button}
        />
        <Image
          src={tg}
          alt="CallButton"
          width={49}
          height={49}
          className={classes.button}
        />
        <Image
          src={callButton}
          alt="CallButton"
          width={49}
          height={49}
          className={classes.button}
        />
      </div>
      {open === "opened" ? (
        <Image
          src={cross}
          alt="CallButton"
          width={49}
          height={49}
          className={classes.button}
          onClick={handleChange}
        />
      ) : (
        <Image
          src={callButton}
          alt="CallButton"
          width={49}
          height={49}
          className={classes.button}
          onClick={handleChange}
        />
      )}
    </div>
  );
}
