import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={StackNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="Cerrar sesión" component={Logout} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
