import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import CollaborationCards from "./CollaborationCards";
import { useTranslation } from "@/app/i18n";

export default async function Collaboration({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  return (
    <section className={classes.collaboration}>
      <Container className={classes.collaboration_wrapper}>
        <h4 className={classes.title}>{t("НАМ ДОВЕРЯЮТ")}</h4>
        <CollaborationCards />
      </Container>
    </section>
  );
}
