import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import arrow from "../../../assets/icons/heroVector.svg";

import News from "@/Components/common/news/news";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import BackShape from "@/layout/backShape/backShape";

export default async function NewsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <section>
      <BackShape href={"/" + lng} text={t("назад на главную")}>
        <News lng={lng} />
      </BackShape>
    </section>
  );
}
