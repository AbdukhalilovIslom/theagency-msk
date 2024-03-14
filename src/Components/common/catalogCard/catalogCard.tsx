import React from "react";
import classes from "./styles.module.css";
import Image, { StaticImageData } from "next/image";

import arrowRight from "../../../assets/icons/heroVector.svg";
import Link from "next/link";

interface CatalogCardProps {
  img: string;
  text: string;
  href: string;
}

export default async function CatalogCard({
  img,
  text,
  href,
}: CatalogCardProps) {
  return (
    <div key={text} className={classes.card}>
      <Image
        src={img}
        alt="card_image"
        className={classes.card_image}
        fill={true}
        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
      />
      <Link href={href} className={classes.card_text}>
        <div className={classes.card_text_inner}>
          <Image
            src={arrowRight}
            alt="arrow_right"
            className={classes.arrow_right}
            height={8}
            width={5}
          />
          <span className={classes.card_text_span}>{text}</span>
        </div>
      </Link>
    </div>
  );
}
