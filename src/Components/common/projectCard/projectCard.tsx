"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import Image, { StaticImageData } from "next/image";
import { Dialog } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import cross from "../../../assets/icons/cross.svg";
import logo from "../../../assets/icons/logoWhite.svg";

interface projectCardProps {
  info: string;
  image: StaticImageData;
  className?: string;
  index: number;
  lng: string;
}

export default function ProjectCard({
  info,
  image,
  className,
  index,
  lng,
}: projectCardProps) {
  const { t } = useTranslation(lng);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={`${classes.project} ${className ? classes[className] : ""}`}
    >
      <Image
        src={image}
        alt="project_image"
        className={classes.project_image}
        width={270}
        height={270}
        onClick={handleClickOpen}
      />
      <p className={classes.project_info}>{info}</p>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialog_wrapper}
      >
        <div className={classes.dialog}>
          <button className={classes.cross_btn} onClick={handleClose}>
            <Image
              src={cross}
              alt="project_cross"
              className={classes.cross}
              width={25}
              height={25}
            />
          </button>
          <Image
            src={logo}
            alt="logo"
            height={38}
            width={154}
            className={classes.logo}
          />
          <Image
            src={image}
            alt="project_image"
            className={classes.dialog_image}
            width={350}
            height={511}
          />
          <p className={classes.dialog_text}>{info}</p>
        </div>
      </Dialog>
    </div>
  );
}
