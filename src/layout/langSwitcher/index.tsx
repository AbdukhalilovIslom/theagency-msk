"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./styles.module.css";

export default function LangSwitcher({ lng }: { lng: string }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Box className={classes.sideBarLang}>
      <Link
        href={redirectedPathName("ru")}
        className={`${classes.sidebarBtn} ${
          lng === "ru" ? classes.active : ""
        }`}
      >
        Ru
      </Link>
      <Link
        href={redirectedPathName("uz")}
        className={`${classes.sidebarBtn} ${
          lng === "uz" ? classes.active : ""
        }`}
      >
        Uz
      </Link>
      <Link
        href={redirectedPathName("en")}
        className={`${classes.sidebarBtn} ${
          lng === "en" ? classes.active : ""
        }`}
      >
        En
      </Link>
    </Box>
  );
}
