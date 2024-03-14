"use client";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import shape from "../../assets/icons/back-shape.png";
import BackButton from "@/Components/common/backButton/BackButton";
import Container from "../container/container";

interface backShapeProps {
  children: React.ReactNode;
  href?: string;
  text?: string;
}

export default function BackShape({ children, href, text }: backShapeProps) {
  return (
    <Container className={classes.wrapper}>
      <Image
        src={shape}
        alt="back-shape"
        height={782}
        width={458}
        className={classes.shape}
      />

      {text && href ? (
        <div className={classes.back}>
          <BackButton text={text} href={href} />
        </div>
      ) : (
        ""
      )}
      {children}
    </Container>
  );
}
