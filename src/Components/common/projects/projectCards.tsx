import React from "react";
import classes from "./styles.module.css";
import ProjectCard from "@/Components/common/projectCard/projectCard";
import img1 from "../../../assets/images/projects/1.webp";
import img2 from "../../../assets/images/projects/2.webp";
import img3 from "../../../assets/images/projects/3.webp";
import img4 from "../../../assets/images/projects/4.webp";
import FadeUp from "@/layout/fadeUp/fadeUp";

export const ProjectData = [
  {
    info: "Траверса для подъема и перемещения конструкций модульных домов",
    image: img1,
  },
  {
    info: "Захват г/п 20тн для подъема и перемещения рулона стали",
    image: img2,
  },
  {
    info: "3ахват С.Г.П. для подъема медных бухт г/п 500кг",
    image: img3,
  },
  {
    info: "Траверса для подъема и перемещения медной трубы диаметром 90мм и длиной до 23000мм, г/п 1200кг",
    image: img4,
  },
];

export default function ProjectCards({ lng }: { lng: string }) {
  return (
    <div className={classes.body}>
      {ProjectData.map(({ info, image }, index) => {
        return (
          <FadeUp delay={(index + 1) / 10}>
            <ProjectCard
              key={index}
              info={info}
              image={image}
              index={index}
              lng={lng}
            />
          </FadeUp>
        );
      })}
    </div>
  );
}
