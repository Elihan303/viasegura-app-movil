import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import React from "react";

const Register = () => {
  const navigation = useNavigation();
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Viasegura
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Registrate para continuar
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Registrarse
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
