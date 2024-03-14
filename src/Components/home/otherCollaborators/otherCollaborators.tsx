import React from "react";
import classes from "./styles.module.css";
import Container from "@/layout/container/container";
import Image from "next/image";
import shape from "../../../assets/icons/back-shape.png";
import img1 from "../../../assets/images/other_colobarations/1.webp";
import img2 from "../../../assets/images/other_colobarations/2.webp";
import { useTranslation } from "@/app/i18n";
import EnterButton from "@/Components/common/enterButton/EnterButton";
import FadeUp from "@/layout/fadeUp/fadeUp";

export default async function OtherCollaborators({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);

  const data = [
    {
      title: t("MSK \n design & construction"),
      p: t("Дизайн интерьера и архитектура"),
      href: `/${lng}`,
      image: img1,
    },
    {
      title: t("MSK \n design furniture"),
      p: t("Производство мебели и готовая на заказ"),
      href: `/${lng}`,
      image: img2,
    },
  ];

  return (
    <section className={classes.other_collaborators}>
      <Container>
        <h4 className={classes.other_collaborators_title}>
          {t("кампании msk")}
        </h4>
      </Container>
      <Container className={classes.wrapper}>
        <div className={classes.title}>
          {t("Другие направления сотрудничества")}
        </div>
        <div className={classes.info_title}>
          {t(
            "MSK - группа компаний и мы можем предложить разные направления сотрудничества."
          )}
        </div>
        <div className={classes.cards}>
          {data.map(({ title, p, href, image }, index) => {
            return (
              <FadeUp delay={(index + 1) / 10} key={index}>
                <div className={classes.card}>
                  <div className={classes.info}>
                    <h2 className={classes.info_h2}>{title}</h2>
                    <p className={classes.info_p}>{p}</p>
                  </div>
                  <div className={classes.btn_wrapper}>
                    <EnterButton href={href} text={t("ПЕРЕЙТИ НА САЙТ")} />
                  </div>
                  <Image
                    src={image}
                    alt="card"
                    className={classes.card_image}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                </div>
              </FadeUp>
            );
          })}
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
