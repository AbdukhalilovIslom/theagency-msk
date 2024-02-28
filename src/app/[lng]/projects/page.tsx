import React from "react";
import classes from "./styles.module.css";
import ProjectCards from "@/Components/common/projects/projectCards";
import BackShape from "@/layout/backShape/backShape";
import { useTranslation } from "@/app/i18n";

export default async function Projects({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.projects}>
      <BackShape text={t("назад на главную")} href={"/" + lng}>
        <div className={classes.title}>{t("Наши проекты")}</div>
        <ProjectCards lng={lng} />
      </BackShape>
    </section>
  );
}
