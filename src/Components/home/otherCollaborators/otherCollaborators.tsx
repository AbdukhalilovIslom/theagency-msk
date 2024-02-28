import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import Image from "next/image";
import shape from "../../../assets/icons/back-shape.png";
import img1 from "../../../assets/images/other_colobarations/Frame 2401.png";
import img2 from "../../../assets/images/other_colobarations/Frame 2402.png";
import { useTranslation } from "@/app/i18n";
import EnterButton from "@/Components/common/enterButton/EnterButton";

export default async function OtherCollaborators({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  return (
    <section className={classes.other_collaborators}>
      <Container className={classes.other_collaborators_title}>
        {t("кампании msk")}
      </Container>
      <Container className={classes.wrapper}>
        <div className={classes.title}>
          {t("Другие направления сотрудничества")}
        </div>
        <div className={classes.info}>
          {t(
            "MSK - группа компаний и мы можем предложить разные направления сотрудничества."
          )}
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.info}>
              <h2 className={classes.info_h2}>
                {t("MSK design & construction")}
              </h2>
              <p className={classes.info_p}>
                {t("Дизайн интерьера, архитектура и строительство")}
              </p>
            </div>
            <div className={classes.btn_wrapper}>
              <EnterButton href={"/" + lng} text={t("ПЕРЕЙТИ НА САЙТ")} />
            </div>
            <Image
              src={img1}
              alt="card"
              className={classes.card_image}
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            />
          </div>
          <div className={classes.card}>
            <div className={classes.info}>
              <h2 className={classes.info_h2}>{t("MSK furniture")}</h2>
              <p className={classes.info_p}>
                {t("Производство мебели и готовая на заказ")}
              </p>
            </div>
            <div className={classes.btn_wrapper}>
              <EnterButton href={"/" + lng} text={t("ПЕРЕЙТИ НА САЙТ")} />
            </div>
            <Image
              src={img2}
              alt="card"
              className={classes.card_image}
              fill
              sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            />
          </div>
        </div>
        <Image
          src={shape}
          alt="shape"
          className={classes.shape}
          width={767}
          height={447}
        />
      </Container>
    </section>
  );
}
