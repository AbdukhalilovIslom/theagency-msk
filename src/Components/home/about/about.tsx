import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import { useTranslation } from "@/app/i18n";
import { Manrope } from "next/font/google";
import EnterButton from "@/Components/common/enterButton/EnterButton";
import FadeUp from "@/layout/fadeUp/fadeUp";
import AboutImage from "./aboutImage";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--manrope-font",
});

export default async function About({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  const data = [
    {
      count: "10",
      text: t("лет на международном рынке"),
    },
    {
      count: "<100",
      text: t("изготовленных систем"),
    },
    {
      count: "10",
      text: t("лет на международном рынке"),
    },
    {
      count: "<100",
      text: t("установленных систем"),
    },
  ];

  return (
    <section className={classes.about}>
      <Container className={classes.title}>
        <span className={classes.title_span}>{t("о нас")}</span>
        <span className={classes.title_h2}>
          {t(
            "MSK - одно из крупнейших предприятий по разработке и изготовлению различного вида грузоподъемных механизмов и съемных грузозахватных приспособлений."
          )}
        </span>
      </Container>
      <Container className={classes.about_us_title}>
        <EnterButton href={"/team"} text={t("О КОМПАНИИ")} />
      </Container>
      <Container className={classes.counts + " " + manrope.className}>
        {data.map(({ count, text }, index) => {
          return (
            <FadeUp delay={(index + 1) / 10}>
              <div
                className={`${classes.count} ${classes["div" + (index + 1)]}`}
              >
                <div className={classes.count_number}>{count}</div>
                <div className={classes.count_text}>{text}</div>
              </div>
            </FadeUp>
          );
        })}
      </Container>
      <AboutImage />
    </section>
  );
}
