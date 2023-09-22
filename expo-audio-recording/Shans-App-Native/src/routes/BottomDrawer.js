import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../components/screens/Profile";
import CategoriesScreen from "../components/screens/Categories";
import MyOrdersScreen from "../components/screens/Myorders";
import DashScreen from "../components/screens/Dashboard";
import Home from "../components/screens/Home";

const Tab = createBottomTabNavigator();

export default function BottomDrawer() {
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Wrap your entire component in a View with white background */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: '#232323',
                        paddingTop: 15,
                        borderTopRightRadius: 70,
                        borderTopLeftRadius: 70,
                    },
                    tabBarIcon: () => {

                        let iconName, size;

                        if (route.name === 'Home') {

                            return (<Image source={require("../../assets/bottomDrawer/home.png")} style={{
                                width: 25,
                                height: 25,
                            }} />)

                        }

                        if (route.name === 'Categories') {

                            return (<Image source={require("../../assets/bottomDrawer/category.png")} style={{
                                width: 25,
                                height: 25,
                            }} />)

                        }

                        if (route.name === 'Dash') {

                            return (<Image source={require("../../assets/bottomDrawer/dashboard.png")} style={{
                                width: 25,
                                height: 25,
                            }} />)

                        }

                        if (route.name === 'MyOrders') {

                            return (<Image source={require("../../assets/bottomDrawer/myorder.png")} style={{
                                width: 25,
                                height: 20,
                            }} />)

                        }

                        if (route.name === 'Profile') {

                            return (<Image source={require("../../assets/bottomDrawer/profile.png")} style={{
                                width: 25,
                                height: 25,
                            }} />)

                        }

                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Dash" component={DashScreen} options={{ headerShown: false }} />
                <Tab.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </View>
    );
}


