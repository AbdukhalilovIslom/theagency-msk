import React from "react";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n";
import EnterButton from "@/Components/common/enterButton/EnterButton";

export default async function NewsViewBtn({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <div className={classes.see_all}>
      <EnterButton href="/news" text={t("СМОТРЕТЬ ВСЁ")} />
    </div>
  );
}
