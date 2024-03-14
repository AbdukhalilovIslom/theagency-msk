import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

import img1 from "../../../assets/images/collaborations/1.png";
import img2 from "../../../assets/images/collaborations/2.png";
import img3 from "../../../assets/images/collaborations/3.png";
import img4 from "../../../assets/images/collaborations/4.png";
import img5 from "../../../assets/images/collaborations/5.png";
import img6 from "../../../assets/images/collaborations/6.png";
import FadeUp from "@/layout/fadeUp/fadeUp";

const data = [img1, img2, img3];
const data2 = [img4, img5, img6];

export default function CollaborationCards() {
  return (
    <div className={classes.companies}>
      <div className={classes.companies_inner}>
        {data.map((el, index) => (
          <FadeUp delay={(index + 1) / 10}>
            <Image
              key={index}
              src={el}
              alt="company"
              className={classes.company}
              width="120"
              height="50"
            />
          </FadeUp>
        ))}
      </div>
      <div className={classes.companies_inner}>
        {data2.map((el, index) => (
          <FadeUp delay={(index + 1) / 10}>
            <Image
              key={index}
              src={el}
              alt="company"
              className={classes.company}
              width="120"
              height="50"
            />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
