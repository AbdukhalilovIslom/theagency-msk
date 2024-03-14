import React from "react";
import classes from "./styles.module.css";
import img1 from "../../assets/images/catalog/category/1.png";
import img2 from "../../assets/images/catalog/category/2.png";
import img3 from "../../assets/images/catalog/category/3.png";
import CatalogCard from "../common/catalogCard/catalogCard";

const cards = [
  {
    img: img1,
    text: "Авиационный канат ГОСТ 2172-80",
    className: "card_1",
    href: "1",
  },
  {
    img: img2,
    text: "Грозозащитный оцинкованный канат ГОСТ 3063-80",
    className: "card_2",
    href: "2",
  },
  {
    img: img3,
    text: "Канат с органическим сердечником ГОСТ 7668-80 ",
    className: "card_3",
    href: "3",
  },
];

export default function CategoryCards({ category }: { category: string }) {
  return (
    <div className={classes.body}>
      {cards.map(({ img, text, href }) => {
        return (
          <CatalogCard
            img={img}
            text={text}
            href={"/catalog/" + category + "/" + href}
          />
        );
      })}
    </div>
  );
}
