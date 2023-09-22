import React, { useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";
import { baseUrl } from "../../api/const";
import axios from "axios";
import { Dropdown ,MultiSelect } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';





export default function Complaints({onSubmitted,Closebutton}){
    const complaint_type_url=`${baseUrl}/viewComplaintType/complaint_type_list/complaint_type_dropdown`
    const complaint_request_url=`${baseUrl}/viewComplaintRequest/complaint_request_list/complaint_request_dropdown`
    const[complaint_type,setComplaint_type]=React.useState([]);
    const[complaint_request,setComplaint_request]=React.useState([]);
    const [isFocus, setIsFocus] = React.useState(false);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                {/* <CheckBox checked={isSelected} color="black" style={styles.checkbox} /> */}
                <Text style={styles.selectedTextStyle}>{item.complaint_name}</Text>
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            </View>
            );
        };
    
    

    useEffect(() => {
        axios.get(complaint_type_url).then(res => {

            const typeArray = res.data.data.map((item) => ({
                id: item._id,
                complaint_type_name: item.complaint_type_name,
            }))
            setComplaint_type(typeArray);

            axios.get(complaint_request_url).then(res => {

                const requestArray = res.data.data.map((item) => ({
                    id: item._id,
                    complaint_name: item.complaint_name,
                    complaint_type_id: item.complaint_type_id,
                }))

                setComplaint_request(requestArray);
            })

        })


    }, [])

    console.log("complaint+++++++++++++++++++++++++++++++", complaint_type)
    console.log("complaint===============================", complaint_request)


    return (
        <Formik
            initialValues={{complaint_request_type:[],complaint_request:'',remarks:'',}}
            onSubmit={(values)=>{console.log("complaint values",values)
                                        const selectedComplaintType_name = complaint_type.find(item => item.id === values.complaint_request_type)?.complaint_type_name || '';
                                        // const selectedComplaintRequest_name = complaint_request.find(item => item.id === values.complaint_request[0])?.complaint_name || '';
                                        const selectedComplaintRequest_names = values.complaint_request.map(itemId => {
                                            const item = complaint_request.find(item => item.id === itemId);
                                            return item ? item.complaint_name : '';
                                        });
                                        console.log("namessss+++++++++++++++===============",selectedComplaintType_name,selectedComplaintRequest_names)

                                        const submitObjects={
                                            complaint_type_name:selectedComplaintType_name,
                                            complaint_request_name:selectedComplaintRequest_names,
                                            complaint_type_id:values.complaint_request_type,
                                            complaint_request_ids:values.complaint_request,
                                            remarks:values.remarks

                                        }

                                        console.log("submitted objests___+==>>>>>>>>>>>>>>>",submitObjects);
                                    
                                        onSubmitted(submitObjects);
                                        Closebutton(false);
                                        
                                        
                                        
        }}
        >
            {(props) => (
                <View style={styles.container}>
                    <View style={styles.fieldmargin}>
                        <Text style={styles.fieldtext}>Complaints/Service Request type:</Text>
                        {/* <Picker
                            style={styles.input}
                            enabled={true}
                            mode="dropdown"
                            placeholder="Select Request Type"
                            onValueChange={props.handleChange('complaint_request_type')}
                            selectedValue={props.values.complaint_request_type}
                        >
                            <Picker.Item label="Select Request Type" value="" />
                            {complaint_type.map((item) => (
                                <Picker.Item
                                    label={item.complaint_type_name.toString()}
                                    key={item.id}
                                    value={item.id}



                                />
                            ))}
                        </Picker> */}
                        <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                data={complaint_type}
                                search
                                maxHeight={300}
                                labelField="complaint_type_name"
                                valueField="id"
                                placeholder={ "Select Complaint type"     }
                                searchPlaceholder="Search Complaint type"
                                value={props.values?.complaint_request_type}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item=>{
                                    console.log('complaint type????????????????????',item)
                                    // props.setFieldValue('customer',item)
                                    props.setFieldValue('complaint_request_type', item.id);
                                    
                                    
                                
                                }}
                            />

                    </View>

                    <View style={styles.fieldmargin}>
                        <Text style={styles.fieldtext}>Complaints/Service Request:</Text>

                        {/* <Picker
                            style={styles.input}
                            enabled={true}
                            mode="dropdown"
                            placeholder="Select Request Type"
                            onValueChange={props.handleChange('complaint_request')}
                            selectedValue={props.values.complaint_request}
                        >

                            <Picker.Item label="Select Request" value="" />

                            {complaint_request.map((item) => {
                                if (item.complaint_type_id == props.values.complaint_request_type) {
                                    return (

                                        <Picker.Item
                                            label={item.complaint_name.toString()}
                                            key={item.id}
                                            value={item.id}



                                        />
                                    )
                                }

                            })}



                        </Picker> */}
                        <MultiSelect 
                                style={styles.dropdown}
                                // placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                data={filtercomplaint=complaint_request.filter(request=>request.complaint_type_id==props.values.complaint_request_type)}
                                labelField="complaint_name"
                                valueField="id"
                                placeholder="Select Request Type"
                                value={props.values?.complaint_request}
                                search
                                searchPlaceholder="Search Request Type"
                                onChange={(item)=>{
                                    console.log("item========================",item)
                                    
                                    props.setFieldValue('complaint_request',item)
                                }}
                                renderItem={renderItem}
                                renderSelectedItem={(item,unSelect)=>(
                                    <TouchableOpacity onPress={()=>unSelect && unSelect(item)}>
                                        <View style={styles.selectedStyle}>
                                            <Text style={styles.textSelectedStyle}>{item.complaint_name}</Text>
                                            <AntDesign color="black" name="delete" size={17} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />

                    </View>
                    <View style={styles.fieldmargin}>
                        <Text style={styles.fieldtext}>Remarks:</Text>
                        <View style={styles.remarkinput}>
                            <TextInput

                                multiline={true}
                                numberOfLines={4}
                                onChangeText={props.handleChange('remarks')}
                                value={props.values.remarks}
                                placeholder="Enter remarks"
                                textAlignVertical="top"

                            />

                        </View>

                    </View>

                    <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>


                </View>

            )}
        </Formik>

    )


}

const styles = StyleSheet.create({
    container: {

        flexGrow: 1,
        paddingHorizontal: 10,
    },

    fieldmargin: {
        marginVertical: 7,

    },
    fieldtext: {
        color: "#ffa600",
        fontWeight: "800",
        fontSize: 16,
    },

    remarkinput: {
        borderWidth: 0.5,
        borderColor: "black",
        paddingHorizontal: 10,
        paddingTop: 5,
        borderRadius: 6,
        maxWidth: 350,

    },

    button: {
        maxWidth: 350,
        backgroundColor: '#ffa600',
        borderRadius: 6,
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input:{
            borderWidth:0.5,
            borderColor:"black",
            paddingHorizontal: 10,
            paddingVertical:30,
            fontSize:18,
            borderRadius:6,
            maxWidth:350,
            marginTop:5,
    },
    dropdown: {
            height: 50,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
    }


)