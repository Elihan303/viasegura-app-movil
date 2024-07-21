import React, { FC } from "react";
import {
  Box,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  VStack,
  Button,
  Text,
} from "native-base";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Props } from "./types";

const Login: FC<Props> = ({ navigation }) => {
  return (
    <Center style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="390" h={"90%"}>
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Bienvenido a viasegura
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Inicia sesion para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Olvidaste tu contraseña?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => navigation.navigate("Home")}
          >
            Inicio de sesion
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Soy un nuevo usuario.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Registrarse
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
