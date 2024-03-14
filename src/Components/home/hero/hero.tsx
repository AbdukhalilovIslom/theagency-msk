import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import { useTranslation } from "@/app/i18n";
import FadeUp from "@/layout/fadeUp/fadeUp";

interface heroProps {
  lng: string;
}

export default async function Hero({ lng }: heroProps) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.hero}>
      <Container className={classes.hero_wrapper}>
        <div className={classes.hero_info}>
          <FadeUp>
            <h1 className={classes.hero_title}>
              {t("Поставляем метизную продукцию в Узбекистане")}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={classes.hero_p}>
              {t(
                "Оптовая торговля метизной продукцией и производство грузоподъемного оборудования"
              )}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
