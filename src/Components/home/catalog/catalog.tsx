import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import backShape from "../../../assets/icons/back-shape.png";
import { useTranslation } from "@/app/i18n";
import CatalogCards from "./catalogCards";
import FadeUp from "@/layout/fadeUp/fadeUp";

interface catalogProps {
  lng: string;
}

export default async function Catalog({ lng }: catalogProps) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.catalog} id="catalog">
      <Image
        src={backShape}
        alt="backshape"
        className={classes.backshape_1}
        width={870}
        height={510}
      />
      <Image
        src={backShape}
        alt="backshape"
        className={classes.backshape_2}
        width={970}
        height={570}
      />
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2 className={classes.h2}>{t("Каталог")}</h2>
          <p className={classes.p}>
            {t("грузоподъемные механизмы и приспособления")}
          </p>
        </div>
        <CatalogCards lng={lng} />
      </div>
    </section>
  );
}
