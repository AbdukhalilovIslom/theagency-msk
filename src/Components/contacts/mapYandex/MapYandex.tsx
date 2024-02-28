"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import classes from "./styles.module.css";

interface defaultCenterType {
  defaultCenter: number[];
}

export default function MapYandex({ defaultCenter }: defaultCenterType) {
  return (
    <div className={classes.map}>
      <YMaps>
        <Map
          style={{
            width: "100%",
          }}
          className={classes.inner_map}
          defaultState={{ center: defaultCenter, zoom: 15 }}
        >
          <Placemark geometry={defaultCenter} />
        </Map>
      </YMaps>
    </div>
  );
}
