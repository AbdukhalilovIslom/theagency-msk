import React from "react";
import classes from "./styles.module.css";
import arrow from "../../../assets/icons/heroVector.svg";
import Image from "next/image";
import Link from "next/link";

export default function EnterButton({
  href,
  text,
}: {
  href?: string;
  text: string;
}) {
  if (href) {
    return (
      <Link href={href} className={classes.btn}>
        <Image
          src={arrow}
          alt={"arrow"}
          height={8}
          width={5}
          className={classes.arrow}
        />
        <div className={classes.text}>{text}</div>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn}>
        <Image
          src={arrow}
          alt={"arrow"}
          height={8}
          width={5}
          className={classes.arrow}
        />
        <div className={classes.text}>{text}</div>
      </button>
    );
  }
}
