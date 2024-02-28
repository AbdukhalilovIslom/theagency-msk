"use client";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Link from "next/link";

import { useTranslation } from "@/app/i18n/client";
import SidebarContext from "@/context/sidebar.context";
import classes from "./styles.module.css";

import LangSwitcher from "./langSwitcher";

interface SidebarMenuProps {
  lng: string
}

function SidebarMenu({ lng, ...props }: SidebarMenuProps) {
  const { t, i18n } = useTranslation(lng);
  const { open, setOpen } = useContext(SidebarContext);
  return (

    <Box className={classes.sidebar}>
      <Box className={classes.sidebarWrapper}>
        <LangSwitcher lng={lng} />

      </Box>
    </Box>

  );
}

export default SidebarMenu;