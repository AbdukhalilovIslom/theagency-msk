"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "@/app/i18n/client";
import EnterButton from "../enterButton/EnterButton";

export default function Consultation({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <section className={classes.consultation} id="consultation">
      <Container>
        <h4 className={classes.consultation_title}>{t("оставьте заявку")}</h4>
      </Container>
      <Container className={classes.consultation_wrapper}>
        <h2 className={classes.title}>{t("Профессиональная консультация")}</h2>
        <div className={classes.body}>
          <div className={classes.body_info}>
            <p className={classes.body_info_p}>
              {t(
                "Если у вас есть вопросы или предложения, оставьте свои контактные данные и мы свяжемся с вами"
              )}
            </p>
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
              placeholder={t("Email")}
            />
            <PhoneInput
              country={"uz"}
              value={phoneNumber}
              onChange={handleChange}
              placeholder="+9989 (94) 999-99-99"
              containerStyle={{ margin: "20px" }}
              buttonStyle={{}}
              dropdownClass="input_phone_dropdown"
              // dropdownStyle={{ background: "#131313" }}
              inputProps={{
                required: true,
              }}
            />
            <textarea
              name=""
              id=""
              placeholder={t("Ваш запрос")}
              rows={5}
              className={classes.body_form_textarea}
            ></textarea>
            <div className={classes.send}>
              <EnterButton text={t("ОТПРАВИТЬ ЗАЯВКУ")} />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
