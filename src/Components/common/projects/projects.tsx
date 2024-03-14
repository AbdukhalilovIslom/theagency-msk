import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import Image from "next/image";
import shape from "../../../assets/icons/back-shape.png";
import { useTranslation } from "@/app/i18n";
import ProjectCards from "./projectCards";
import EnterButton from "../enterButton/EnterButton";

export default async function Projects({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.projets}>
      <Container className={classes.projets_wrapper}>
        <div className={classes.title}>
          <h2 className={classes.title_h2}>{t("Наши проекты")}</h2>
          <div className={classes.display_none}>
            <EnterButton href={"/projects"} text={t("в портфолио")} />
          </div>
        </div>
        <ProjectCards lng={lng} />
        <div className={classes.display_block}>
          <EnterButton href={"/projects"} text={t("в портфолио")} />
        </div>
      </Container>
      <Image
        src={shape}
        alt="project_image"
        className={classes.shape}
        width={1054}
        height={617}
      />
    </section>
  );
}
