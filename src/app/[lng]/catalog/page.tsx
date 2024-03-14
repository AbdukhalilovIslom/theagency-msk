import React from "react";
import classes from "./styles.module.css";

import BackShape from "@/layout/backShape/backShape";
import CatalogCards from "@/Components/catalog/catalogCards";
import { useTranslation } from "@/app/i18n";

export default async function CatalogPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <BackShape>
      <h2 className={classes.title}>{t("Каталог")}</h2>
      <CatalogCards />
    </BackShape>
  );
}
