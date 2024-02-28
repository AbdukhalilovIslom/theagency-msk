import React from "react";
import img1 from "../../../assets/images/teamImage.jpg";
import classes from "./styles.module.css";
import TeamCard from "../teamCard/teamCard";

const cards = [
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
  {
    img: img1,
    role: "middle-дизайнер",
    name: "Иванов Иван Иванович",
  },
];

export default function TeamCards() {
  return (
    <div className={classes.cards}>
      {cards.map((item, index) => {
        return <TeamCard item={item} />;
      })}
    </div>
  );
}
