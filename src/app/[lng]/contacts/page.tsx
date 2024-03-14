import React from "react";
import classes from "./styles.module.css";
import MapYandex from "@/Components/contacts/mapYandex/MapYandex";
import { useTranslation } from "@/app/i18n";
import Consultation from "@/Components/common/consultation/consultation";
import BackShape from "@/layout/backShape/backShape";
import tg from "../../../assets/icons/telegram.svg";
import ins from "../../../assets/icons/instagram.svg";
import Image from "next/image";
import Link from "next/link";

interface ContactsProps {
  params: {
    lng: string;
  };
}

export default async function Contacts({ params: { lng } }: ContactsProps) {
  const { t } = await useTranslation(lng);
  return (
    <div className={classes.contacts}>
      <BackShape text={t("назад на главную")} href={"/" + lng}>
        <div className={classes.contacts_wrapper}>
          <div className={classes.left_title}>{t("Контакты")}</div>
          <div className={classes.contacts_right}>
            <div className={classes.right_info}>
              <div className={classes.label}>{t("Адрес офиса:")}</div>
              <div className={classes.text}>{t("г.Ташкент,")}</div>
              <div className={classes.text}>
                {t("ул.Ш.Руставели, 2 - вагоный проезд, дом 1")}
              </div>
            </div>
            <div className={classes.right_info}>
              <div className={classes.label}>{t("Номер телефона:")}</div>
              <div className={classes.text}>998 (78) 122-30-69</div>
            </div>
            <div
              className={`${classes.right_info} ${classes.display_none}`}
              style={{ display: "flex", gap: "35px", flexDirection: "row" }}
            >
              <Link href="https://web.telegram.org/" className={classes.text}>
                <Image src={tg} alt="telegram" height={25} width={25} />
              </Link>
              <Link href="https://www.instagram.com/" className={classes.text}>
                <Image src={ins} alt="telegram" height={25} width={25} />
              </Link>
            </div>
            <div className={`${classes.right_info} ${classes.div4}`}>
              <div className={classes.label}>Email:</div>
              <div className={classes.text}>info@mskanat.uz</div>
            </div>
            <div
              className={`${classes.right_info} ${classes.display_block}`}
              style={{ display: "flex", gap: "35px", flexDirection: "row" }}
            >
              <Link href="https://web.telegram.org/" className={classes.text}>
                <Image src={tg} alt="telegram" height={25} width={25} />
              </Link>
              <Link href="https://www.instagram.com/" className={classes.text}>
                <Image src={ins} alt="telegram" height={25} width={25} />
              </Link>
            </div>
          </div>
        </div>
      </BackShape>

      <div className={classes.map}>
        <MapYandex defaultCenter={[41.274748, 69.241935]} />
      </div>
      <Consultation lng={lng} />
    </div>
  );
}
