import { BusRouteProps } from "@pages/BusRoute/types";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  BusRoute: BusRouteProps;
};
export type RootStackProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
