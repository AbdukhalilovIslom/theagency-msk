import React from "react";
import classes from "./styles.module.css";
import img1 from "../../../assets/images/catalog/1.webp";
import img2 from "../../../assets/images/catalog/2.webp";
import img3 from "../../../assets/images/catalog/3.webp";
import img4 from "../../../assets/images/catalog/4.webp";
import img5 from "../../../assets/images/catalog/5.webp";
import img6 from "../../../assets/images/catalog/6.webp";
import img7 from "../../../assets/images/catalog/7.webp";
import img8 from "../../../assets/images/catalog/8.webp";
import CatalogCard from "@/Components/common/catalogCard/catalogCard";
import EnterButton from "@/Components/common/enterButton/EnterButton";
import { useTranslation } from "@/app/i18n";

const cards = [
  {
    img: img1,
    text: "стальные канаты",
    className: "card_1",
  },
  {
    img: img2,
    text: "cварочные электроды",
    className: "card_2",
  },
  {
    img: img3,
    text: "Проволока стальная",
    className: "card_3",
  },
  {
    img: img4,
    text: "Грузоподъемные захваты ",
    className: "card_4",
  },
  {
    img: img5,
    text: "Стропы грузоподъемные",
    className: "card_5",
  },
  {
    img: img6,
    text: "стяжные механизмы",
    className: "card_6",
  },
  {
    img: img7,
    text: "Комплектующие для строп",
    className: "card_7",
  },
  {
    img: img8,
    text: "Комплектующие для строп2",
    className: "card_7",
  },
];

export default async function CatalogCards({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <div className={classes.body}>
      {cards.map(({ img, text }) => {
        return (
          <CatalogCard img={img} text={text} href={"/catalog/something"} />
        );
      })}
      <div className={classes.see_all}>
        <EnterButton text={t("все разделы")} href={"/catalog"} />
      </div>
    </div>
  );
}
