import { createStackNavigator } from "@react-navigation/stack";
import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import { RootStackParamList } from "./types";
import BusRoute from "@pages/BusRoute";
import MyDrawer from "./drawer";

const Stack = createStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackTitle: "Atras" }}
    >
      <Stack.Screen
        name="Login"
        options={{ headerTitle: "Inicio de sesion" }}
        component={Login}
      />
      <Stack.Screen
        name="HomeDrawer"
        component={MyDrawer}
        options={{ headerShown: false }} // Oculta el header del stack en esta pantalla
      />
      <Stack.Screen
        name="Home"
        options={{ headerTitle: "Inicio" }}
        component={Home}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="BusRoute"
        options={{ headerTitle: "Ruta" }}
        component={BusRoute}
      />
    </Stack.Navigator>
  );
}
