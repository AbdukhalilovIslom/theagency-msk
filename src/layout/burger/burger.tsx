import React, { useState } from "react";
import logo from "../../assets/icons/logoWhite.svg";
import cross from "../../assets/icons/cross.svg";
import shape from "../../assets/icons/back-shape.png";
import tg from "../../assets/icons/instagram.svg";
import insta from "../../assets/icons/burgerPhoneIcon.svg";
import phone from "../../assets/icons/telegram.svg";
import classes from "./styles.module.css";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LangSwitcher from "../langSwitcher";
import { onest } from "@/app/[lng]/providers";
import MakeApplication from "@/Components/common/makeApplication/makeApplication";
import { useTranslation } from "@/app/i18n/client";
import CallButton from "@/Components/common/callButton/CallButton";

interface BurgerProps {
  lng: string;
}

export default function Burger({ lng }: BurgerProps) {
  const { t } = useTranslation(lng);
  const navigations = [
    { text: t("Каталог"), href: "/" + lng + "/catalog" },
    { text: t("О компании"), href: "/" + lng + "/team" },
    { text: t("Проекты"), href: "/" + lng + "/projects" },
    { text: t("Новости и статьи"), href: "/" + lng + "/news" },
    { text: t("Контакты"), href: "/" + lng + "/contacts" },
  ];
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleIsOpen} className={classes.burger_icon}>
        <div className={classes.burger}>
          <span className={classes.hamburger__top}></span>
          <span className={classes.hamburger__bottom}></span>
        </div>
      </div>
      <Drawer
        anchor={"top"}
        variant="temporary"
        open={isOpen}
        onClose={handleIsOpen}
        color="white"
        disablePortal={true}
      >
        <div className={`${classes.burger_wrapper} ${onest.className}`}>
          <div className={classes.header}>
            <div className={classes.left}>
              {/* <Image
                src={cross}
                alt="cross"
                width={31}
                height={31}
                onClick={handleIsOpen}
                className={classes.close_icon}
              /> */}
              <div
                className={`${classes.burger} ${classes._opened}`}
                onClick={handleIsOpen}
              >
                <span className={classes.hamburger__top}></span>
                <span className={classes.hamburger__bottom}></span>
              </div>
              <div className={classes.display_none}>
                <LangSwitcher lng={lng} />
              </div>
            </div>
            <Link href={"/" + lng} onClick={() => setOpen(false)}>
              <Image
                src={logo}
                alt="logo"
                height={38}
                width={154}
                className={classes.logo}
              />
            </Link>
            <div className={classes.display_none}>
              <MakeApplication lng={lng} />
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.navs}>
              {navigations.map(({ text, href }) => {
                return (
                  <Link
                    onClick={handleIsOpen}
                    href={href}
                    key={text}
                    className={classes.body_link}
                  >
                    <span>{text}</span>&gt;
                  </Link>
                );
              })}
            </div>

            <Image src={shape} alt="shape" className={classes.back_shape} />
          </div>
          <div className={classes.footer}>
            <div className={classes.display_block}>
              <MakeApplication lng={lng} />
            </div>
            <div className={classes.display_block}>
              <LangSwitcher lng={lng} />
            </div>

            <div className={classes.social_media}>
              <Image src={tg} alt="social_media" height={25} width={25} />
              <Image src={insta} alt="social_media" height={25} width={25} />
              <Image src={phone} alt="social_media" height={25} width={25} />
            </div>
            <div className={classes.display_none}>
              <CallButton />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
