import React, { FC } from "react";
import Map from "@components/Map";
import { Props } from "./types";

const BusRoute: FC<Props> = ({ route }) => {
  return <Map _route={route.params.route} />;
};

export default BusRoute;
