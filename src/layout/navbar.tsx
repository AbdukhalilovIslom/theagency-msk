"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/icons/logoWhite.svg";
import { Box } from "@mui/material";

import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import LangSwitcher from "./langSwitcher";
import Burger from "./burger/burger";
import MakeApplication from "@/Components/common/makeApplication/makeApplication";

interface NavbarProps {
  lng: string;
}

function Navbar({ lng, ...props }: NavbarProps) {
  const [scrollStyle, setScrollStyle] = useState<string>("shadow_mute");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 0) {
        setScrollStyle("shadow_on");
      } else {
        setScrollStyle("shadow_off");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={classes.navbar}>
      <div
        className={`${classes.shadow} ${
          scrollStyle ? classes[scrollStyle] : ""
        }`}
      ></div>
      <div className={classes.wrapper}>
        <ul className={classes.right}>
          <li>
            <Burger lng={lng} />
          </li>
          <li className={classes.lang}>
            <LangSwitcher lng={lng} />
          </li>
        </ul>
        <Link
          href={`/${lng}`}
          style={{ width: "max-content", height: "max-content" }}
        >
          <Image
            src={Logo}
            alt="logo"
            width={154}
            height={38}
            className={classes.logo}
          />
        </Link>
        <div className={classes.contacts}>
          <MakeApplication lng={lng} />
        </div>
      </div>
    </Box>
  );
}

export default Navbar;
