export interface IBusRouteArgs {
  nombre: string;
}

export interface Route {
  id: string;
  routeName: string;
  description: string;
  departureTime: string;
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
}
