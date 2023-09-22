import React from "react";
import { View, Image, StyleSheet } from "react-native";

const FullImageScreen = ({ route }) => {
    const { imageUrl } = route.params;

    return (
        <View style={styles.container}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
                <Image
                    source={{
                        uri:
                            "https://cdn1.iconfinder.com/data/icons/scenarium-silver-vol-8/128/044_error_not_found_page-1024.png",
                    }}
                    style={styles.image}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black", // Set the background color as per your design
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain", // Adjust the image resize mode as needed
    },
});

export default FullImageScreen;
