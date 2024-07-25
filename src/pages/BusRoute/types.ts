import { Route } from "@firebase/db/busRoute/types";
import { RootStackProps } from "../../router/types";

export interface Props extends RootStackProps<"BusRoute"> {}

export interface BusRouteProps {
  route: Route;
}
