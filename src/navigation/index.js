import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Login } from "../screens/contato";
import { home } from "../screens/home";
import { integrantes } from "../screens/integrantes";
import { noticias } from "../screens/noticias";
import { sobre } from "../screens/sobre";

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="#000000"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: "#FFFFFF" }}
    >
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Integrantes"
        component={integrantes}
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={noticias}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="mail" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
