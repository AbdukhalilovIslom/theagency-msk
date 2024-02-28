import React from "react";
import classes from "./styles.module.css";
import aboutImage from "../../../assets/images/aboutbck.png";
import Image from "next/image";
import Container from "@/layout/container/container";
import { useTranslation } from "@/app/i18n";
import { Manrope } from "next/font/google";
import EnterButton from "@/Components/common/enterButton/EnterButton";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--manrope-font",
});

export default async function About({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
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
        <div className={classes.count}>
          <div className={classes.count_number}>10</div>
          <div className={classes.count_text}>
            {t("лет на международном рынке")}
          </div>
        </div>
        <div className={classes.count}>
          <div className={classes.count_number}> &lt;100</div>
          <div className={classes.count_text}>{t("изготовленных систем")}</div>
        </div>
        <div className={classes.count}>
          <div className={classes.count_number}>10</div>
          <div className={classes.count_text}>
            {t("лет на международном рынке")}
          </div>
        </div>
        <div className={classes.count}>
          <div className={classes.count_number}>&lt;100</div>
          <div className={classes.count_text}>{t("установленных систем")}</div>
        </div>
      </Container>
      <Image
        src={aboutImage}
        alt="about_image"
        width="1200"
        height="400"
        className={classes.about_image}
      />
    </section>
  );
}
