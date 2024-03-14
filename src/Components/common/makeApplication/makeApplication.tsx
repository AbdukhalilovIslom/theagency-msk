"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import EnterButton from "../enterButton/EnterButton";
import classes from "./styles.module.css";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import shape from "../../../assets/icons/back-shape.png";
import cross from "../../../assets/icons/cross.svg";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MakeApplication({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className={classes.make_application_wrapper}>
      <div onClick={handleClickOpen}>
        <EnterButton text={t("ОТПРАВИТЬ ЗАЯВКУ")} />
      </div>
      <div className={`${classes.make_application} `}>
        <Dialog
          sx={{ height: "100vh" }}
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          className={classes.dialog_wrapper}
        >
          <div className={classes.dialog}>
            <div className={classes.dialog_close}>
              <Image
                src={cross}
                alt="cross"
                width={31}
                height={31}
                onClick={handleClose}
                className={classes.close_icon}
              />
            </div>
            <div className={classes.dialog_title}>{t("Оставить заявку")}</div>
            <div className={classes.dialog_text}>
              {t(
                "Оставьте ваши контактные данные и мы свяжемся с вами в ближайшее время."
              )}
            </div>
            <form className={classes.body_form}>
              <input
                className={classes.body_form_input}
                type="text"
                placeholder={t("Ваше имя")}
              />
              <input
                className={classes.body_form_input}
                type="text"
                placeholder="Email"
              />
              <PhoneInput
                country={"uz"}
                value={phoneNumber}
                onChange={handleChange}
                placeholder="+9989 (94) 999-99-99"
                containerStyle={{ margin: "20px" }}
                dropdownClass="input_phone_dropdown"
                inputProps={{
                  required: true,
                }}
              />
              <textarea
                name=""
                id=""
                placeholder={t("Ваш запрос")}
                rows={3}
                className={classes.body_form_textarea}
              ></textarea>
              <div className={classes.send}>
                <EnterButton text={t("ОТПРАВИТЬ ЗАЯВКУ")} />
              </div>
            </form>
            <Image
              src={shape}
              alt="shape"
              width={393}
              height={230}
              className={classes.shape}
            />
          </div>
        </Dialog>
      </div>
    </div>
  );
}
