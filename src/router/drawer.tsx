import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { styles } from "./styles";

export const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://freesvg.org/img/abstract-user-flat-4.png" }} // Reemplaza con la URL de la foto del perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Elihan</Text>
        {/* Reemplaza con el nombre del usuario */}
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" as never }],
          })
        }
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "@pages/Home";
import { RootStackParamList } from "./types";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator<RootStackParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{ headerTitle: "Inicio" }}
        component={Home}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
