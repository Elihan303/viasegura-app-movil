import { createStackNavigator } from "@react-navigation/stack";
import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerBackTitle: "Atras" }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
