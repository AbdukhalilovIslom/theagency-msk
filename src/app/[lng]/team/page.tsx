import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import aboutImage from "../../../assets/images/aboutImageTeam.png";
import TeamCards from "@/Components/team/teamCards/teamCards";
import { useTranslation } from "@/app/i18n";
import BackShape from "@/layout/backShape/backShape";

export default async function Team({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.team}>
      <BackShape href={"/" + lng} text={t("назад на главную")}>
        <div className={classes.about_company}>
          <h2 className={classes.about_company_title}>О компании</h2>
          <div className={classes.about_company_content}>
            <Image
              src={aboutImage}
              width={500}
              height={250}
              alt="about-image"
              className={classes.about_company_image}
            />
            <div className={classes.about_company_text}>
              «MOS STAL KANAT» - крупный поставщик метизной продукции и
              грузоподъемного оборудования. Мы работаем на рынке Узбекистана с
              2015 года.
              <br />
              <br />
              Наши преимущества: <br />
              <ul>
                <li>Собственное производство и цехи </li>
                <li>Прямые поставки комплектующих </li>
                <li>
                  Постоянно расширяющийся ассортимент изделий за счет
                  собственных конструкторских разработок по индивидуальным
                  заказам клиентов;{" "}
                </li>
                <li>Конкурентоспособные цены </li>
                <li>Соблюдение сроков </li>
              </ul>
              <br />
              <br />
              «MOS STAL KANAT» - надежный партнер для вашего бизнеса!
            </div>
          </div>
        </div>
        <div className={classes.title}>{t("Наша команда")}</div>
        <TeamCards />
      </BackShape>
    </section>
  );
}
