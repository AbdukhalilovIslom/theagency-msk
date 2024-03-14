import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import backImage from "../../../assets/icons/back-shape.png";
import Container from "@/layout/container/container";
import { useTranslation } from "@/app/i18n";
import FadeUp from "@/layout/fadeUp/fadeUp";

export default async function Advantages({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng);
  const data = [
    {
      title: t("Уникальный \n ассортимент"),
      info: t(
        "Мы лидеры по степени грузоподъемности механизмов, и только мы имеем в ассортименте некоторые виды канатов и других приспособлений"
      ),
    },
    {
      title: t("Высокое \n качество"),
      info: t(
        "Все механизмы изготавливаются в строгом соответствии с ГОСТ, РД, ТУ. Каждая партия выпускаемой продукция имеет необходимую технологическую документацию, сертификат качества и паспорт с подробными характеристиками и правилами эксплуатаци"
      ),
    },
    {
      title: t("Индивидуальные \n разработки"),
      info: t(
        "Постоянно расширяющийся ассортимент изделий за счет собственных конструкторских разработок по индивидуальным заказам клиенто"
      ),
    },
    {
      title: t("Точно \n в срок"),
      info: t(
        "Мы контролируем сроки, благодаря собственным производственным цехам и складским помещениям, а также прямые каналам поставок комплектующих из России и стран зарубежья"
      ),
    },
  ];

  return (
    <section className={classes.advantages}>
      <Container className={classes.wrapper}>
        <h4 className={classes.title}>{t("ПРЕИМУЩЕСТВА")}</h4>
        <div className={classes.content_wrapper}>
          <div className={classes.content}>
            {data.map(({ title, info }, index) => {
              return (
                <FadeUp delay={(index + 1) / 10}>
                  <div key={title} className={classes.card}>
                    <h4 className={classes.card_title}>{title}</h4>
                    <p className={classes.card_info}>{info}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
          <Image
            src={backImage}
            alt="content_image"
            className={classes.content_image}
            width={767}
            height={447}
          />
        </div>
      </Container>
    </section>
  );
}
