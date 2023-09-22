import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useNavigation,useRoute } from '@react-navigation/native';

export default function Scanner() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    // const [data, setData] = useState(null);
    // const [customerName, setCustomerName] = useState(null);
    const [serialMode, setSerialMode] = useState(false);
    const route = useRoute()

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);



    const handleBarCodeScanned =({ type, data }) => {

        console.log('daaaaaaaaaaaaaaaaaaata', data)
        setScanned(true);

        // if(serialMode){
            
        //     console.log('Serial Number Scanned:', data);

        //     const onScanCallback = route.params?.onScan;
        //     if (onScanCallback) {
        //         onScanCallback(data); // Use the callback to send scanned data back
        //     }
        
        //     navigation.goBack();
            
            
        // }

        // else{

            const billParts = data.split('-')
            console.log("which bill", billParts)
            const whichBill = billParts[0]
            console.log("which bill", whichBill)
            // setData(data); // Store the scanned data
            const sequenceParts = data.split('-'); // Split the data by "-"
            // console.log('sequenceParts', sequenceParts)
            const sequenceNumber = sequenceParts.slice(1).join('-'); // Join all parts except the first one

            console.log("sequence number:", sequenceNumber)
            // Navigate to the NewCollection screen and pass the scanned data
            navigation.navigate('NewCollection', { scannedData: sequenceNumber, whichBill: whichBill});
        // }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
{/* 
            <Button
                title={serialMode ? 'Exit Serial Mode' : 'Enter Serial Mode'}
                onPress={() => setSerialMode(!serialMode)} // Toggle the serial scanning mode
            /> */}
            {scanned && (
                <View>
                    {/* <Text>Scanned Data: {data}</Text>
                    {customerName && <Text>Customer Name: {customerName}</Text>} */}
                    <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
