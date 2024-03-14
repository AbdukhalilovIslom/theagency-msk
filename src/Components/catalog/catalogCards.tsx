import React from "react";
import classes from "./styles.module.css";
import CatalogCard from "../common/catalogCard/catalogCard";
import FadeUp from "@/layout/fadeUp/fadeUp";
import { catalogs } from "@/data/category";

export default function CatalogCards() {
  return (
    <div className={classes.body}>
      {catalogs.map(({ image, name, key }, index) => {
        return (
          <FadeUp delay={(index + 1) / 10} key={key}>
            <CatalogCard img={image} text={name} href={`/catalog/${key}`} />
          </FadeUp>
        );
      })}
    </div>
  );
}
