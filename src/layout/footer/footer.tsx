"use client";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import Container from "../container/container";
import LangSwitcher from "../langSwitcher";
import Image from "next/image";
import insta from "../../assets/icons/instagram.svg";
import tg from "../../assets/icons/telegram.svg";
import Link from "next/link";

interface footerProps {
  lng: string;
}

function Footer({ lng, ...props }: footerProps) {
  const { t } = useTranslation(lng);
  const navigations = [
    { text: t("Каталог"), href: "/" + lng + "/catalog" },
    { text: t("О компании"), href: "/" + lng + "/team" },
    { text: t("Проекты"), href: "/" + lng + "/projects" },
    { text: t("Новости и статьи"), href: "/" + lng + "/news" },
    { text: t("Контакты"), href: "/" + lng + "/contacts" },
  ];

  return (
    <Container className={classes.footer}>
      <div className={classes.footer_top}>
        <div className={classes.main}>
          <h4 className={classes.main_heading}>{t("Меню")}</h4>
          <div className={classes.main_wrapper}>
            {navigations.map(({ text, href }) => {
              return (
                <Link key={text} href={href} className={classes.main_btn}>
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={classes.catalog}>
          <h4 className={classes.catalog_heading}>{t("Каталог")}</h4>
          <div className={classes.catalog_wrapper}>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Стальные канаты")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Стальная проволока")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Грузоподъемные захваты ")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Сварочные электроды")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Стропы грузоподъемные")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Комплектующие для строп")}
            </Link>
            <Link
              href={"/" + lng + "/catalog/something"}
              className={classes.catalog_btn}
            >
              {t("Стяжные механизмы")}
            </Link>
          </div>
        </div>
        <div className={classes.contact}>
          <h4 className={classes.contact_heading}>{t("Контакты")}</h4>
          <div className={classes.contact_wrapper}>
            <div className={classes.contact_btns}>
              <Link href={"/" + lng + "/"} className={classes.contact_btn}>
                info@mskanat.uz
              </Link>
              <Link href={"/" + lng + "/"} className={classes.contact_btn}>
                998 78 122-30-69
              </Link>
            </div>
            <div className={classes.contact_btns}>
              <Link
                href={"/" + lng + "/"}
                className={`${classes.contact_btn} ${classes.contact_btn_dn}`}
              >
                Instagram
              </Link>
              <Link
                href={"/" + lng + "/"}
                className={`${classes.contact_btn} ${classes.contact_btn_dn}`}
              >
                Telegram
              </Link>
              <Link
                href={"/" + lng + "/"}
                className={`${classes.contact_btn} ${classes.contact_btn_dn}`}
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <div className={classes.contacts_image}>
          <Image src={insta} alt="tg" height={25} width={25} />
          <Image src={tg} alt="tg" height={25} width={25} />
        </div>
        <div className={classes.lang_switch}>
          <LangSwitcher lng={lng} />
        </div>
        <span>MSK. GROUP OF COMPANIES</span>
        <Link href="https://theagency.uz/">{t("Сделано The Agency")}</Link>
      </div>
    </Container>
  );
}

export default Footer;
