import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    FlatList,
    BackHandler,
    TouchableOpacity
} from "react-native";
import { Dimensions } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { FAB, ActivityIndicator } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../custombutton";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/const";
import HomeProductList from "./HomeProductList";
import ExitConfirmationModal from "../Modal/ExitConfirmationModal";
import Carousel, { Pagination } from 'react-native-snap-carousel';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const productUrl = `${baseUrl}/viewProducts`;

const data = [
    { image: require('../../../assets/huaweibanner.jpg') },
    { image: require('../../../assets/iphone.jpg') },
    { image: require('../../../assets/huawei.jpg') },
];




export default function Home() {

    const route = useRoute();
    const numColumns = 2;
    const [productNames, setProductNames] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false); // Track loading state for loadMore
    const [exitModalVisible, setExitModalVisible] = useState(false); // State for showing the exit confirmation modal
    const [activeSlide, setActiveSlide] = useState(0); // Add state for tracking the active slide index
    const renderLoader = () => {
        return (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#ffa600" />
            </View>
        );
    };

    const handleExitConfirm = () => {
        // Handle the exit confirmation logic here
        setExitModalVisible(false); // Close the modal if needed
        BackHandler.exitApp();
    };

    const loadMoreItem = () => {
        if (loadingMore) return;
        setLoadingMore(true);
        setOffset(offset + 1);
    };

    useFocusEffect(
        React.useCallback(() => {
            // When the screen is focused, show the exit confirmation modal only if on the "Home" screen.
            if (route.name === "Home") {
                BackHandler.addEventListener("hardwareBackPress", handleBackPress);
            }
            return () => {
                BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
            };
        }, [route.name])
    );

    const handleBackPress = () => {
        if (route.name === "Home") {
            setExitModalVisible(true);
            return true;
        }
        return false;
    };

    useEffect(() => {
        fetchProducts();
    }, [offset]);

    const fetchProducts = () => {
        axios
            .get(`${productUrl}?offset=${offset}&limit=20`)
            .then((res) => {
                const productNamesArr = res.data.data.map((item) => ({
                    _id: item._id,
                    productName: item.product_name,
                    productCost: item.cost,
                    imageUrl: item.image_url,
                }));
                setProductNames((prevProductNames) => [
                    ...prevProductNames,
                    ...productNamesArr,
                ]);
                setLoadingMore(false);
            })
            .catch((err) => console.log(err));
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {exitModalVisible && (
                <ExitConfirmationModal
                    visible={exitModalVisible}
                    onClose={() => setExitModalVisible(false)}
                    onConfirm={handleExitConfirm}
                />
            )}
            <StatusBar backgroundColor="#ffa600" />
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../../assets/shansHome.jpeg")}
                    fadeDuration={0}
                    style={{ width: 200, height: 50 }}
                />
                <FontAwesome name="bell-o" style={styles.bellIcon} />
            </View>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={22} color="white" />
                <CustomButton
                    title="What are you looking for ?"
                    textcolor="#ffa600"
                    onPress={() => navigation.navigate("OptionScreen")}
                />
                <TouchableOpacity onPress={() => navigation.navigate('BarCode')}>
                    <AntDesign name="barcode" size={22} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontWeight: "500", textAlign: "center", marginTop: 8, fontSize: 16 }}>
                    Discount available for Bulk Purchase
                </Text>
            </View>
            <View style={styles.bannerContainer}>
                {/* <Image source={require("../../../assets/huaweibanner.jpg")} style={{ width: 450, height: 200, resizeMode: "stretch" }} /> */}
                <Carousel
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    )}
                    sliderWidth={screenWidth} // Set the slider width to match the screen width
                    itemWidth={screenWidth}   // Set the item width to match the screen width
                    autoplay={true}           // Enable autoplay
                    autoplayInterval={3000}
                    onSnapToItem={(index) => setActiveSlide(index)} // Add this callback to track the active slide
                />
                <Pagination
                    dotsLength={data.length} // Specify the number of dots (should match the number of items in your data array)
                    activeDotIndex={activeSlide} // Set the active dot based on the active slide index
                    containerStyle={styles.paginationContainer} // Add your custom styles here
                    dotStyle={styles.paginationDot} // Add your custom dot styles here
                    inactiveDotOpacity={0.4} // Set the opacity of inactive dots (optional)
                    inactiveDotScale={0.6} // Set the scale of inactive dots (optional)
                />
            </View>
            <View style={styles.button}>
                <View style={styles.buttonicon}>
                    <Image source={require("../../../assets/homeIcons/ic_dashboard_pickup.png")} style={{ width: 90, height: 50, resizeMode: "stretch" }} />
                    <CustomButton title="Pickup" color="#32c918" onPress={() => console.log("Button pressed")} />
                </View>
                <View style={styles.buttonicon}>
                    <Image source={require("../../../assets/homeIcons/ic_shan_service.png")} style={{ width: 90, height: 50, resizeMode: "stretch" }} />
                    {/* <CustomButton title="Services" color="#fe0000" onPress={() => navigation.navigate("Jobscreen")} /> */}
                    <CustomButton title="Services" color="#fe0000" />
                </View>
                <View style={styles.buttonicon}>
                    <Image source={require("../../../assets/homeIcons/ic_dashboard_contacts.png")} style={{ width: 90, height: 50, resizeMode: "stretch" }} />
                    <CustomButton title="Contacts" color="#3c7dff" onPress={() => navigation.navigate("Contactsviewnav")} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.productListContainer}>
                    <FlatList
                        data={productNames}
                        keyExtractor={(item, index) => item._id + index.toString()}
                        renderItem={({ item }) => <HomeProductList item={item} />}
                        numColumns={numColumns}
                        ListFooterComponent={renderLoader}
                        onEndReached={loadMoreItem}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </View>
            <FAB
                style={styles.fab}
                icon={() => <MaterialIcons name="message" size={24} color="white" />}
                onPress={() => console.log("FAB pressed")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    Text: {
        padding: 25,
    },
    shanstext: {
        fontSize: 20,
    },
    shans: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-around",
        marginTop: 10,
    },
    fab: {
        position: "absolute",
        left: 20,
        bottom: 100,
        backgroundColor: "#ffa600",
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    searchContainer: {
        marginTop: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        justifyContent: 'space-evenly',
        backgroundColor: '#222222',
        alignItems: "center"
    },

    searchtext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#eea40f',
    },

    buttonicon: {
        borderWidth: 0.5,
        borderColor: '#222222',
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 5
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
    },
    imageContainer: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    bellIcon: {
        fontSize: 24,
        color: "black",
    },
    productListContainer: {
        // alignSelf: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 5,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationContainer: {
        paddingVertical: 10, // Adjust the vertical spacing as needed
        paddingHorizontal: 10, // Adjust the horizontal spacing as needed
        alignItems: 'center', // Center the dots horizontally
    },
    paginationDot: {
        width: 8, // Adjust the dot width as needed
        height: 8, // Adjust the dot height as needed
        borderRadius: 4, // Make it a circle
        marginHorizontal: 6, // Adjust the horizontal spacing between dots
        backgroundColor: '#ffa600', // Active dot color
    },
});