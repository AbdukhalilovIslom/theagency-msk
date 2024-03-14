"use client";
import React, { useEffect } from "react";
import classes from "./styles.module.css";
import Image from "next/image";

import aboutImage from "../../../assets/images/aboutbck.webp";
import { useScroll, motion, scroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutImage() {
  const { ref, inView, entry } = useInView();

  return (
    <motion.div style={{ width: "100%", scale: 1 }}>
      <Image
        src={aboutImage}
        alt="about_image"
        width="1200"
        height="400"
        className={classes.about_image}
      />
    </motion.div>
  );
}
