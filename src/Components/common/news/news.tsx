"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import img1 from "../../../assets/images/news/1.png";
import img2 from "../../../assets/images/news/2.png";
import img3 from "../../../assets/images/news/3.png";

import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
import EnterButton from "../enterButton/EnterButton";
import Link from "next/link";
import FadeUp from "@/layout/fadeUp/fadeUp";

const data = {
  news: [
    {
      image: img1,
      title: "MOS STAL KANAT - 8 лет!",
      info: "Созданное в 2015 году и по настоящее время, успешно развивающееся предприятие, успело зарекомендовать себя как надежного партнера и производителя высококачественной продукции, пользующейся устойчивым спросом и находящейся в приоритете для потребителей Узбекистана.",
    },
    {
      image: img2,
      title:
        "Изготовление строп в ассортименте \n для UZAUTO MOTORS POWERTRAIN",
      info: "Специалистами ООО «MOS STAL KANAT» по заказу потребителя-  «UZAUTO MOTORS POWERTRAIN» AJ, были произведены и успешно испытаны стропы в ассортименте.",
    },
    {
      image: img3,
      title: "Испытание нестандартных \n крупнотоннажных канатных строп",
      info: "Кольцевой строп был изготовлен специалистами с соблюдением ключевых требований к грузоподъемной продукции и на основании технического задания заказчика.",
    },
  ],
  articles: [
    {
      image: img3,
      title: "Испытание нестандартных \n крупнотоннажных канатных строп",
      info: "Кольцевой строп был изготовлен специалистами с соблюдением ключевых требований к грузоподъемной продукции и на основании технического задания заказчика.",
    },
    {
      image: img1,
      title: "MOS STAL KANAT - 8 лет!",
      info: "Созданное в 2015 году и по настоящее время, успешно развивающееся предприятие, успело зарекомендовать себя как надежного партнера и производителя высококачественной продукции, пользующейся устойчивым спросом и находящейся в приоритете для потребителей Узбекистана.",
    },
    {
      image: img2,
      title:
        "Изготовление строп в ассортименте \n для UZAUTO MOTORS POWERTRAIN",
      info: "Специалистами ООО «MOS STAL KANAT» по заказу потребителя-  «UZAUTO MOTORS POWERTRAIN» AJ, были произведены и успешно испытаны стропы в ассортименте.",
    },
  ],
};

export default function News({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [tab, setTab] = useState(1);

  return (
    <div className={classes.news_wrapper}>
      <div className={classes.title}>
        <h2 className={classes.title_h2}>{t("Новости и статьи")}</h2>
        <div className={classes.title_btns}>
          <button
            className={`${classes.title_btn} ${
              tab === 1 ? classes.active_tab : ""
            }`}
            onClick={() => setTab(1)}
          >
            {t("Новости")}
          </button>
          |
          <button
            className={`${classes.title_btn} ${
              tab === 2 ? classes.active_tab : ""
            }`}
            onClick={() => setTab(2)}
          >
            {t("статьи")}
          </button>
        </div>
      </div>
      <div className={classes.body}>
        {tab === 1
          ? data["news"].map(({ image, title, info }, index) => {
              return (
                <FadeUp delay={(index + 1) / 10} key={title}>
                  <div className={classes.card}>
                    <Link href={"/news/somthing"}>
                      <Image
                        src={image}
                        alt="news_image"
                        width={301}
                        height={145}
                        className={classes.news_image}
                      />
                    </Link>
                    <div className={classes.card_info}>
                      <h2 className={classes.card_info_h2}>{title}</h2>
                      <p className={classes.card_info_p}>{info}</p>
                    </div>
                    <div className={classes.card_info_btn}>
                      <EnterButton
                        href={"/news/somthing"}
                        text={t("СМОТРЕТЬ")}
                      />
                    </div>
                  </div>
                </FadeUp>
              );
            })
          : data["articles"].map(({ image, title, info }, index) => {
              return (
                <FadeUp delay={(index + 1) / 10} key={title}>
                  <div className={classes.card}>
                    <Link href={"/news/somthing"}>
                      <Image
                        src={image}
                        alt="news_image"
                        width={301}
                        height={145}
                        className={classes.news_image}
                      />
                    </Link>
                    <div className={classes.card_info}>
                      <h2 className={classes.card_info_h2}>{title}</h2>
                      <p className={classes.card_info_p}>{info}</p>
                    </div>
                    <div className={classes.card_info_btn}>
                      <EnterButton
                        href={"/news/somthing"}
                        text={t("СМОТРЕТЬ")}
                      />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
      </div>
    </div>
  );
}
