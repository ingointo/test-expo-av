import React, { useEffect, useState } from "react"
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import axios from "axios";
import { baseUrl } from "../../api/const";
import AsyncStorage from '@react-native-async-storage/async-storage';



const invoiceUrl = `${baseUrl}/viewQuotation`

//Custom button navigation
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
export default function MyOrdersScreen() {
  const [invoice, setInvoice] = useState([]);
  const [user, setUser] = useState('');
  

  useEffect(() => {
    axios.get(invoiceUrl)
      .then((res) => {
        console.log(res.data.data)
        const customerDetails = res.data.data.map((item) => ({
          id: item._id,
          sequenceNum: item.sequence_no,
          paymentDate: item.date,
          invoiceStatus: item.invoice_status,
          paidAmount: item.total_amount,
          salesperson_id:item.sales_person.sales_person_id,
        }));
        setInvoice(customerDetails);
      })
      .catch((error) => {
        console.error("Error fetching invoice:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const StoredData = await AsyncStorage.getItem('adminDetails')

        console.log("storedData:", StoredData);

        if (StoredData !== null) {
          const userData = JSON.parse(StoredData)
          setUser(userData);
        } else {
          setUser('No data Found')
        }
      } catch (error) {
        console.log('error fetching data', error)
      }
    }

    fetchData();

  }, [])

  console.log("Login user data", user);
    
  

  console.log("invoice", invoice);
  const navigation = useNavigation();

  return (
    <View style={styles.navigationContainer}>
      <CustomButton title="My Orders" onPress={() => navigation.goBack()} />
      <ScrollView>

      {invoice.map((item, index) => {
        if (user.related_profile._id === item.salesperson_id) {
          const originalDate = new Date(invoice[0].paymentDate);

          console.log("date+++++++++++++", originalDate);

          // Format date as 'mm/dd/yyyy'
          const formattedDate = originalDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

          return (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('OrderDetails', { item: item })}>
              <View style={styles.container}>
                <View style={styles.cardTitle}>
                  <Text>{item.sequenceNum}</Text>
                  <Text> {formattedDate}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.paidAmount} variant="bodyMedium">QAR {item.paidAmount}</Text>
                  {/* <Text style={styles.paidSuccess} variant="titleLarge">{item.invoiceStatus ? "Paid" : "Not Paid"}</Text> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }
      })}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 20,
    borderBottomColor: "#ffa600",
    borderBottomWidth: 2.5,
    borderWidth: 1.5,
    borderRightWidth: 2.5,
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRadius: 25
  },
  title: {
    fontSize: 15,
    color: "white"
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
    flexDirection: "row",
    justifyContent: "space-between"
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
    color: "white"
  },
  paidAmount: {
    color: "green",

  },
  paidSuccess: {
    color: "green",

  }

});