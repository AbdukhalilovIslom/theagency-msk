import React from "react";
import classes from "./styles.module.css";
import CatalogCard from "@/Components/common/catalogCard/catalogCard";
import EnterButton from "@/Components/common/enterButton/EnterButton";
import { useTranslation } from "@/app/i18n";
import FadeUp from "@/layout/fadeUp/fadeUp";
import { catalogs } from "@/data/category";

export default async function CatalogCards({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <div className={classes.body}>
      {catalogs.map(({ image, name, key }, index) => {
        if (index < 8) {
          return (
            <FadeUp delay={(1 + index) / 10}>
              <CatalogCard img={image} text={name} href={`/catalog/${key}`} />
            </FadeUp>
          );
        }
      })}
      <div className={classes.see_all}>
        <EnterButton text={t("все разделы")} href={"/catalog"} />
      </div>
    </div>
  );
}
