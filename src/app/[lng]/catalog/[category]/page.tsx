import React from "react";
import classes from "./styles.module.css";

import BackShape from "@/layout/backShape/backShape";
import { useTranslation } from "@/app/i18n";
import CategoryCards from "@/Components/catalog/categoryCards";
import { catalogs } from "@/data/category";

interface pageProps {
  params: { lng: string; category: string };
}

export default async function page({ params: { lng, category } }: pageProps) {
  const { t } = await useTranslation(lng);

  return (
    <BackShape text={t("назад в каталог")} href={"/catalog"}>
      <h2 className={classes.title}>
        {t(String(catalogs.find((el) => el.key === category)?.name))}
      </h2>
      {catalogs.find((el) => el.key === category)?.items?.length ? (
        <CategoryCards category={category} />
      ) : (
        <div className={classes.nothing_special}>Пусто</div>
      )}
    </BackShape>
  );
}
