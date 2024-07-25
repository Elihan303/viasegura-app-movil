import React, { FC } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { styles } from "./styles";
import useGetLocation from "src/hooks/useGetLocation";
import Loading from "@components/Loading";
import { Button, Center, Heading, Text } from "native-base";
import MapViewDirections from "react-native-maps-directions";
import { Props } from "./types";

const Map: FC<Props> = ({ _route }) => {
  const { location, errorMsg } = useGetLocation();
  const coords = location?.coords;
  const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

  return (
    <>
      {errorMsg && (
        <Center style={styles.container}>
          <Heading>No tenemos permisos de ubicacion </Heading>
        </Center>
      )}
      {!coords && !errorMsg && <Loading />}
      {coords && (
        <View style={styles.container}>
          <Center>
            <Heading>{_route.routeName}</Heading>
          </Center>
          <MapView
            showsUserLocation
            style={styles.map}
            initialRegion={{
              latitude: coords?.latitude,
              longitude: coords?.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <MapViewDirections
              origin={_route.origin}
              destination={_route.destination}
              apikey={GOOGLE_MAPS_APIKEY}
              language={"es"}
              strokeColor="hotpink"
              strokeWidth={3}
            />
          </MapView>
          <Center>
            <Button mt="2" colorScheme="indigo">
              Reservar boleto
            </Button>
          </Center>
        </View>
      )}
    </>
  );
};

export default Map;
