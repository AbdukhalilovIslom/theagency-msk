import React from "react";
import classes from "./styles.module.css";
import CatalogCard from "../common/catalogCard/catalogCard";
import { catalogs } from "@/data/category";

export default function CategoryCards({ category }: { category: string }) {
  console.log(catalogs.find((el) => el.key === category)?.items);

  return (
    <div className={classes.body}>
      {catalogs
        .find((el) => el.key === category)
        ?.items?.map(({ image, name, key }) => {
          return (
            <CatalogCard
              img={image}
              text={name}
              href={"/catalog/" + category + "/" + key}
            />
          );
        })}
    </div>
  );
}
