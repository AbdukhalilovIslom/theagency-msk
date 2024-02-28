import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

import img1 from "../../../assets/images/collaborations/1.svg";
import img2 from "../../../assets/images/collaborations/2.svg";
import img3 from "../../../assets/images/collaborations/3.svg";
import img4 from "../../../assets/images/collaborations/4.svg";
import img5 from "../../../assets/images/collaborations/5.svg";

const data = [img1, img2, img3, img4, img5, img5];

export default function CollaborationCards() {
  return (
    <div className={classes.companies}>
      {data.map((el, index) => (
        <Image
          key={index}
          src={el}
          alt="company"
          className={classes.company}
          width="120"
          height="50"
        />
      ))}
    </div>
  );
}
