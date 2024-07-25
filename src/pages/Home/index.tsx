import React, { FC } from "react";
import {
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { getBusRoute } from "@firebase/db/busRoute";
import { Props } from "./types";

const Home: FC<Props> = ({ navigation }) => {
  const data = getBusRoute();
  return (
    <Center flex={1} backgroundColor={"white"}>
      <Box flex={1}>
        <Heading fontSize="xl" p="4" pb="3" mt="3">
          Rutas
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              onTouchStart={() =>
                navigation.navigate("BusRoute", { route: item })
              }
              flex={1}
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              py="2"
            >
              <HStack
                width={"100%"}
                space={[2, 3]}
                justifyContent="space-between"
              >
                <VStack marginLeft={5}>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.routeName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.description}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  marginRight={5}
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.departureTime}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => `key-${item.id}`}
        />
      </Box>
      ;
    </Center>
  );
};

export default Home;
