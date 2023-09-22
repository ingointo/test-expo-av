import React, { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/const";

const invoiceUrl = `${baseUrl}/viewQuotation/`;

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <AntDesign name="left" size={14} color="black" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const OrderDetails = () => {

    const [invoice, setInvoice] = useState({})
    const route = useRoute(); // or use parathesis passing prop

    const id = route.params.item.id
    console.log(id)

    useEffect(() => {
        axios.get(invoiceUrl + id).then((res) => {
            console.log("+++++++++++++++++++++++++=----------------------==========", res.data.data[0])
            // setInvoice(res.data.data)
            const invoiceDetails = res.data.data[0]
            console.log("invoiceDetails-------------------", invoiceDetails)
            if (invoiceDetails) {
                const details = {
                    id: invoiceDetails._id,
                    sequenceNum: invoiceDetails.sequence_no,
                    paymentDate: invoiceDetails.date,
                    invoiceStatus: invoiceDetails.invoice_status,
                    paidAmount: invoiceDetails.paid_amount,
                    // productName: invoiceDetails.product_name,
                    date: invoiceDetails.date,
                    total: invoiceDetails.total_amount,
                    customerName: invoiceDetails.customer.name,
                    products: invoiceDetails.crm_product_lines,
                    // warehouseName: invoiceDetails.warehouses_name
                }
                setInvoice(details)
                console.log("details", details)
            }

            // console.log("Invoice details -----+++++++++++++++++++-----", invoiceDetails)
        });
    }, []);
    const originalDate = new Date(invoice.date);

    // Format date as 'mm/dd/yyyy'
    const formattedDate = originalDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    // Format time as 'hh:mm AM/PM'
    const formattedTime = originalDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    console.log('Formatted Date:', formattedDate);
    console.log('Formatted Time:', formattedTime);

    console.log("products+++++++++++++++++++++++++++", invoice.products)


    console.log("Invoic details -----+++++++++++++++++++-----", invoice)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <CustomButton title="Quotation Details" onPress={() => navigation.goBack()} />

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>{invoice.sequenceNum}</Text>

                {/* <View style={styles.columnContainer}>
                    <Text style={styles.label}>Product Name:</Text>
                    <Text style={styles.text}>{invoice.productName}</Text>
                </View> */}

                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.text}> {formattedDate}</Text>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.text}>{invoice.total}</Text>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Customer Name:</Text>
                    <Text style={styles.text}>{invoice.customerName}</Text>
                </View>
                <ScrollView>
                {/* <View style={styles.columnContainer}>
                    <Text style={styles.label}>Warehouse Name:</Text>
                    <Text style={styles.text}>{invoice.warehouseName}</Text>
                </View> */}
                {invoice.products ? (
                    invoice.products.map((item, index) => (
                        <View key={index} style={styles.productContainer}>
                            <View style={styles.cardTitle}>
                                <Text style={{ fontWeight: '700' }}>{item.product?.product_name}</Text>
                                {/* <Text>{item.paymentDate}</Text> */}
                            </View>
                            <View style={styles.cardContent}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Price:</Text>
                                    <Text>{item.total}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Quantity:</Text>
                                    <Text>{item.qty}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text>No products available</Text>
                )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffa600",
    },
    title: {
        marginLeft: 34,
        fontSize: 15,
        color: "white",
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: "black"
    },
    columnContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    productContainer: {
        marginTop: 9,
        padding: 30,
        borderBottomColor: "#ffa600",
        borderBottomWidth: 5.5,
        borderWidth: 1.5,
        borderRightWidth: 5.5,
        // borderLeftColor: "#ccc",
        // borderTopColor: "#ccc",
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingVertical: 30 
    },

    cardTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#f0f0f0",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cardContent: {
        padding: 10,
        // flexDirection: "row",
        // justifyContent: "space-between"
    },

});

export default OrderDetails;
