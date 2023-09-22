import React from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';


const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainerExit}>
                <View style={styles.buttonContent}>
                <Image source={require("../../../assets/exitIcons/cancel.png")} style={{  width: 30, height: 30, resizeMode: "stretch" }} />
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const CustomButtonExit = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContent}>
                <Image source={require("../../../assets/exitIcons/exit.png")} style={{ width: 30, height: 30, resizeMode: "stretch" }} />
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ExitConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 30 }}>
          <Text style={styles.exitText}>Are you sure you want to exit the app?</Text>
          {/* <Button title="Cancel" onPress={onClose} /> */}
          <CustomButton title="Cancel" onPress={onClose}/>
          {/* <Button title="Exit" onPress={onConfirm} /> */}
          <CustomButtonExit title="Exit" onPress={onConfirm}/>
        </View>
      </View>
    </Modal>
  );
};

export default ExitConfirmationModal;

const styles = StyleSheet.create({


    
    buttonContainer: {
        // backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 10,
        borderWidth:1,
        borderColor: "#ffa600",
        // width: "80%",
       
        
    },
    buttonContent: {
        flexDirection: "row",
        
        // marginLeft: 10,
        // marginBottom: 12,
        alignItems: "center",
        
        padding: 5
    },

    buttonText: {
       marginHorizontal: 20,
        fontSize: 16,
        color: "black", 
        fontWeight: "bold"
    },
    buttonContainerExit: {
        borderRadius: 15,
        marginVertical: 10,
        borderWidth:1,
        borderColor: "#ffa600",
        // width: "80%",

    }, 
    exitText: {
        fontWeight: "bold"
    }

})
