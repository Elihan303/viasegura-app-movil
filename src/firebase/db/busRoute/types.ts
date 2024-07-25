export interface IBusRouteArgs {
  nombre: string;
}

export interface IBusRoute {
  id: string;
  nombre: string;
}

export interface Route {
  id: number;
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
