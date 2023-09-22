import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/const";

// const productDetailsUrl = `${baseUrl}/viewProducts/`;




//Custom button navigation
const CustomButton = ({ title, onPress, }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <AntDesign name="left" size={14} color="black" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

//Custom Add button to add the product 
const CustomAddButton = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.addbutton}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ProductDetails = () => {
  const route = useRoute();
  const id = route.params?.item?._id;
  const barcodeData = route.params?.barScanner;
  const contact = route.params.contact;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Construct the productDetailsUrl based on barcodeData and id
    let productDetailsUrl;

    if (barcodeData) {
      // If barcodeData is available, use it to fetch data
      productDetailsUrl = `${baseUrl}/viewProducts?product_name=${barcodeData}`;
    } else if (id) {
      // If barcodeData is not available but id is, use id to fetch data
      productDetailsUrl = `${baseUrl}/viewProducts/${id}`;
    }

    if (productDetailsUrl) {
      setLoading(true);
      axios.get(productDetailsUrl).then((res) => {
        const productItems = res.data.data[0]; // Assuming there's only one item in the array
        console.log("productItems", productItems)
        if (productItems) {
          const details = {
            productID: productItems._id,
            productName: productItems.product_name,
            productCategory: productItems.category.category_name,
            productQuantity: productItems.total_product_quantity,
            totalProductQuantity: productItems.total_product_quantity,
            productArea: productItems.area.area_name,
            // alternateProduct: productItems.alternate_products,
            productCost: productItems.cost,
            productCode: productItems.barcode,
            productDesc: productItems.product_description,
            minSalePrice: productItems.minimal_sales_price,
            sale_price: productItems.sale_price,
            imageUrl: productItems.image_url,
            alternateProduct: productItems.alternateproduct || [],
            productLocation: productItems.product_location,
            // alternateProductQuantity:
            // productItems.alternateproduct &&
            // productItems.alternateproduct.length > 0
            //   ? productItems.alternateproduct[0].total_quantity
            //   : 0, 

          };
          setDetail(details);
        }
        setLoading(false);
      });
    }
  }, [id, barcodeData]);


  // console.log("product details url: ", detail)
  console.log("alternateproduct-----", detail.alternateProduct);


  const navigation = useNavigation();

  // const handleAddContact = () => {
  //   navigation.navigate("ContactDetailScreen", { contact_id: contact_id });
  // };

  return (
    <View style={styles.container}>
      <CustomButton title="Product Details" onPress={() => navigation.goBack()} />
      <View style={styles.detailsContainer}>
        <View style={styles.imgNameContainer}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("FullImage", { imageUrl: detail.imageUrl })
            }
          >
            <Image
              style={[styles.tinyLogo, { backgroundColor: 'lightgrey', borderRadius: 4 }]}
              source={{
                uri: detail.imageUrl || 'https://cdn1.iconfinder.com/data/icons/scenarium-silver-vol-8/128/044_error_not_found_page-1024.png',
              }}
            />
          </TouchableWithoutFeedback>
          <View style={styles.productInfoContainer}>
            <Text style={styles.productName}>{detail.productName}</Text>
            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>In Stock</Text>
              <Text style={styles.infoText}>{detail.productCost} QAR</Text>
            </View>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>Product Code</Text>
          <Text style={styles.columnText}>{detail.productCode}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>Category</Text>
          <Text style={styles.columnText}>{detail.productCategory}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>On Hand</Text>
          <Text style={styles.columnText}>{detail.productQuantity}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>Total Quantity</Text>
          <Text style={styles.columnText}>{detail.totalProductQuantity}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>More Information</Text>
          <Text style={styles.columnText}>{detail.productDesc}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>Product Location</Text>
          <Text style={styles.columnText}>{detail.productLocation}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.productDetails}>Area</Text>
          <Text style={styles.columnText}>{detail.productArea}</Text>
        </View>

        <View style={styles.alternateProductsContainer}>
          <Text style={styles.productDetails}>Alternate Products</Text>
          {detail.alternateProduct && detail.alternateProduct.length > 0 ? (
            <Text style={styles.alternateProductText}>
              {detail.alternateProduct.map((alternate, index) => (
                <Text key={index}>
                  {index > 0 ? ", " : ""}
                  {alternate.product_name}({alternate.total_quantity !== undefined ? alternate.total_quantity : 0})
                </Text>
              ))}
            </Text>
          ) : (
            <Text style={styles.columnText}>No alternate products available</Text>
          )}
        </View>



      </View>

      {/* navigate to the contact component have item(contacts, name, mobile number and others) */}
      {contact ? (
        <CustomAddButton title="Add Products" onPress={() => navigation.navigate('Contactdetails', { item: contact, product: detail })} />
      ) : (
        <CustomAddButton title="Add Products" onPress={() => navigation.navigate('Contactsviewnav')} />
      )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tinyLogo: {
    width: 150,
    height: 150,
  },
  detailsContainer: {
    padding: 10
  },
  imgNameContainer: {
    flexDirection: "row"
  },
  productInfoContainer: {
    marginHorizontal: 15
  },
  productName: {

    fontWeight: "bold",
    fontSize: 14,
    maxWidth: "83%",
  },
  rowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 8,
  },
  infoText: {
    marginTop: 5,
    fontSize: 14,
    color: "#797979"
  },
  rowText: {
    color: "#ffa600",
    fontSize: 14,
    fontWeight: "bold"
  },
  productDetails: {
    color: "#797979",
    marginTop: 10
  },
  columnText: {
    color: "black",
    marginTop: 10,
    marginRight: 50,

  },
  columnContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  // alternateProductsContainer: {
  //   justifyContent: "space-between",
  //   flexDirection: "row",
  //   maxWidth: "100%"
  // },
  addbutton: {
    position: "absolute",
    bottom: 20, // Adjust the distance from the bottom as needed
    left: 10,
    right: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ffa600",
    borderRadius: 13,
  },
  // alternateProductText: {
  //   // justifyContent: "space-between"
  // }
  alternateProductsContainer: {
    flexDirection: "column",
    marginTop: 10,

  },
  alternateProductText: {
    flexDirection: "row",

    marginTop: 10,
  },

});

export default ProductDetails;
