import React from "react";
import { ScrollView } from "react-native";
import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainerExit}>
                <View style={styles.buttonContent}>

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

                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default function Privacy() {

    const navigation = useNavigation();

    const route = useRoute();

    const updateCheckedState = route.params?.updateCheckedState;

    console.log("route", route);



    return (

        <ScrollView>

            <View style={styles.container}>
                {/* <Text style={styles.heading}>GENERAL INSTRUCTIONS</Text>
            <Text>1	SALES IN CHARGE</Text>
            <Text>2 CREDIT COLLECTION</Text>
            <Text>3 SHIPMENT FOR CUSTOMER</Text>
            <Text>4 CREDIT PAYMENT RECEIPT</Text>
            <Text>5 EXPENSES AND PAYMENTS</Text>
            <Text>6 RMA</Text>
            <Text>7 SERVICE ATTENDING</Text>
            <Text>8 TECHNICIAN</Text>
            <Text>9 CASHIER OR IN CHARGE</Text>
            <Text>10 ACCOUNTANT/BACKGROUND + SALES</Text>
            <Text>11 CUSTOMER ACCOUNT CROSS CHECKING</Text>
            <Text>12 AUDITING</Text>
            <Text style={styles.paragraph}>
                Hello This is an example of 
                    {'\n'}
                    multiline text
            </Text> */}

                <Text>
                    <Text style={styles.heading}>GENERAL INSTRUCTIONS</Text> {'\n'}
                    1	SALES IN CHARGE{'\n'}
                    2 	CREDIT COLLECTION{'\n'}
                    3 	SHIPMENT FOR CUSTOMER{'\n'}
                    4 	CREDIT PAYMENT RECEIPT{'\n'}
                    5 	EXPENSES AND PAYMENTS {'\n'}
                    6 	RMA {'\n'}
                    7 	SERVICE ATTENDING{'\n'}
                    8 	 TECHNICIANS {'\n'}
                    9 	CASHIER OR IN CHARGE{'\n'}
                    10 	ACCOUNTANT/BACKGROUND + SALES{'\n'}
                    11 	CUSTOMER ACCOUNT CROSS CHECKING{'\n'}
                    12 	AUDITING{'\n'}
                    13 	STOCK MANAGEMENT{'\n'}
                    14 	PURCHASE ORDER{'\n'}
                    15 	PURCHASE ORDER CONFIRMATION{'\n'}
                    16 	OMAN SHIPMENT{'\n'}
                    17 	ASSET MANAGEMENT{'\n'}
                    18 	RMA{'\n'}{'\n'}

                    WARNING :{'\n'}

                    The Username &amp; Passwords are assigned as per the requirements and its full responsibility of the given Users.  Company will not be responsible for any malpractice or misuse. {'\n'}


                    മുന്നറിയിപ്പ് .{'\n'}


                    കമ്പനിയുടെ ആവശ്യങ്ങൾക്ക് വേണ്ടി എല്ലാ ഗ്രൂപ്പ്‌ മെമ്പേഴ്സിനും  USER NAME ഉം പാസ്സ്‌വേർഡും നൽകിയുട്ടുണ്ട് .അത്‌ മറ്റുള്ളവർ ഉപയോഗിച്ചു വല്ല ക്രമക്കേടും നടന്നാൽ അതിന്റെ ഉത്തരവാദിത്തം കമ്പനി ഏറ്റെടുക്കുന്നതല്ല{'\n'}


                    <Text style={styles.heading}>  1 – SALES IN CHARGE</Text>{'\n'}{'\n'}


                    1. കസ്റ്റമർ വന്നാൽ അവരോടു നമ്മുടെ  പ്രൊഡക്ടുകളെ പറ്റി വിശദീകരിക്കുക. നമ്മുടെ കൈയിൽ ഇല്ലാത്തതാണെങ്കിൽ  കൂടെ അവരെ അറിയിക്കാതിരിക്കുക. ഇല്ലാത്തപ്രൊഡക്ടുകൾഎവിടെനിന്നെങ്കിലുംസംഘടിപ്പിച്ചുകൊടുക്കാൻശ്രമിക്കുക.{'\n'}{'\n'}

                    When the customer comes, explain to them about our products. If they are not in our hands, do not inform them. Try to organize products from anywhere.{'\n'}{'\n'}

                    • വരുന്ന കസ്റ്റമറിനെ പ്രോഡക്റ്റ് ഇല്ല എന്നു പറഞ്ഞു ഉടനെ മടക്കി അയക്കാതിരിക്കുക.{'\n'}

                    Do not immediately return the customer by saying that there is no product.{'\n'}

                    1.  കസ്റ്റമർ വാങ്ങുന്ന സാധനങ്ങൾ കൃത്യമായി ഇൻവോയ്‌സ്‌ ചെയ്തു പ്രിന്റ് എടുത്തങ്ങിയ സാധനവും ഇൻവോയ്സും ക്രോസ്സ്ചെക്ക്ചെയ്തു ബോധ്യപ്പെട്ടതിനു ശേഷം മാത്രം വെരിഫൈഡ്സ്റ്റാമ്പ് അടിക്കുക.{'\n'}

                    Prepare invoice for all items purchased by the customer, take print out and verified stamp has to be applied after cross checking.{'\n'}

                    • സാധനങ്ങൾ മാറി പോകാതിരിക്കാനും എണ്ണം തിട്ടപ്പെടുത്താനും വേണ്ടിയാണ് ഇങ്ങനെ ചെയ്യുന്നത്{'\n'}

                    This is done so that the goods will not be interchanged and numbers will be counted correctly.{'\n'}

                    • ഇൻവോയ്‌സ്‌ ചെയ്യാതെ ഒരു സാധനങ്ങളും ഷോപ്പിനു പുറത്തു പോകുവാൻ പാടില്ല.{'\n'}

                    Do not leave any purchased items out of the shop without invoicing.{'\n'}

                    • തിരക്കുള്ളപ്പോൾ പല ഷോപ്പിൽ നിന്നും സാധനങ്ങൾ അത്യാവശ്യമാണെന്നു പറഞ്ഞു അടുത്തുള്ള ഷോപ്പിലുള്ളവർ എടുത്തു കൊണ്ടു പോകാറുണ്ട്. പല ഷോപ്പുകളിലെയും സ്റ്റോക്ക്ചെക്ക്ചെയ്തപ്പോഴാണ്പല എൻട്രികളും വിട്ടുപോയതായി ശ്രദ്ധയിൽപ്പെട്ടത്. അതുകൊണ്ട് ഈ പ്രവണത ഒരു കാരണവശാലും കമ്പനി അനുവദിക്കുന്നതല്ല{'\n'}

                    When in a hurry, many shopkeepers take items from the nearest shop stating that they need them.  But when checking the stock at several shops noticed that many entries were missing.So this trend will not be allowed by the company{'\n'}



                    3 അതിനുശേഷം വിറ്റ പ്രൊഡക്ടിന്റെയും ഇൻവോയ്സിന്റെയും ഫോട്ടോ മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്‌ലോഡ്ചെയ്യുക.{'\n'}

                    Then upload photo of the product sold and its invoice in mobile application.{'\n'}

                    • ഏതെങ്കിലും കാരണവശാൽ സ്റ്റോക്ക് വ്യത്യാസം വന്നാൽക്രോസ്സ്‌ചെക്ചെയ്യാൻ സാധിക്കും.{'\n'}

                    If for any reason there is change in stock, it can be crosschecked{'\n'}

                    4.      	ക്രെഡിറ്റ്:കൺട്രോൾറൂമിന്റെ അനുവാദമില്ലാതെ ആർക്കും കടം കൊടുക്കുവാൻ പാടില്ല.{'\n'}

                    Credit: credit is not allowed without the permission of control room.{'\n'}

                    • കാരണം പല കസ്റ്റമേഴ്സും ഷോപ്പിലുള്ള സെയിൽസ്മാൻമാരുമായി സൗഹൃദത്തിലായി കടത്തിന്സാധനം വാങ്ങി കൊണ്ടു പോയി ക്യാഷ്തിരിച്ചു കിട്ടാത്ത സാഹചര്യങ്ങൾ ഉണ്ട്.{'\n'}

                    Due to the fact that many customers are friendly with the shop\'s salesmen and there are situations where the borrower is unable to repay the cash.{'\n'}

                    • കമ്പനി നിശ്ചയിച്ച മിനിമം ക്വാണ്ടിറ്റി നിർബന്ധമായും പാലിക്കുക{'\n'}

                    Comply with the minimum quantity set by the company{'\n'}

                    • എല്ലാ ദിവസവും പുതിയ സാധനങ്ങൾ വിപണിയിൽ ഇറങ്ങി കൊണ്ടിരിക്കുകയാണ്. ആരെങ്കിലും പുതിയ മോഡൽ സാധനങ്ങൾ അന്വേഷിച്ചു വന്നാൽ നമ്മുടെ കൈയിൽ ഇല്ലാത്തതാണെങ്കിൽ ആ പ്രോഡക്റ്റ്മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്‌ലോഡ്ചെയ്യുക.{'\n'}

                    Every day new items are coming into the market. If someone is looking for a new model and we don\'t have one, upload that product into the mobile application.{'\n'}{'\n'}
                    <Text style={styles.heading}> 2 - CREDIT COLLECTION </Text>  {'\n'}


                    അപ്പ്രൂവ്ഡ്കസ്റ്റമേഴ്സിന്കമ്പനി ക്രെഡിറ്റ്ലിമിറ്റ്നിശ്ചയിച്ചിട്ടുണ്ട് {'\n'}
                    The Company has fixed credit limit for Approved Customers{'\n'}

                    i. എത്രയാണ് അനുവദിച്ചതുക {'\n'}
                    i. How much amount is allotted{'\n'}

                    ii. എത്രയാണ് അനുവദിച്ച ദിവസം {'\n'}
                    ii. Number of allotted days{'\n'}


                    ഇതിൽ ഏതെങ്കിലും അധികമായാൽ ഉടനെ കസ്റ്റമേഴ്സിനെ വിളിച്ചു തിരിച്ചടപ്പിക്കുകയും പരിധി കഴിഞ്ഞിട്ടും അടക്കാത്ത കസ്റ്റമേഴ്സിന്റെ വിവരം കൺട്രോൾ റൂമിൽ അറിയിക്കുകയും ചെയ്യുക.{'\n'}

                    If any of these are overstated, call the customer immediately if not, report about the unpaid customers to the control room.{'\n'}

                    • പലകസ്റ്റമറും കടത്തിനു സാധനം വാങ്ങിയിട്ട്വിളിച്ചു ചോദിക്കാതെ പണം തിരിച്ചടക്കാറില്ല.  കുറെനാൾ കഴിഞ്ഞാൽ അവർ സ്ഥലത്ത് ഉണ്ടാകണമെന്നില്ല അല്ലെങ്കിൽ സാധനം വാങ്ങിയ വിവരം അവർ അംഗീകരിക്കില്ല. അങ്ങനെ ഒരുപാടു പണം കമ്പനിക്കു നഷ്ടപ്പെട്ടിട്ടുണ്ട്.{'\n'}

                    Many customers do not repay their debts without calling for the debt, and after a few days they may not be in the spot or do accept the information. Lots of money has been lost by the company due to this reason.{'\n'}{'\n'}

                    <Text style={styles.heading}>  3 - SHIPMENT FOR CUSTOMER</Text>{'\n'}



                    ഒരു ബോക്സിനു മുകളിൽ കസ്റ്റമർക്കു സാധനമുണ്ടെങ്കിൽ തീർച്ചയായും പാക്കിങ്ലിസ്റ്റ്തയാറാക്കുക. പാക്കിങ്ലിസ്റ്റിന്റെ രൂപം എക്സൽ ഫോർമാറ്റിൽ തരുന്നതായിരിക്കും.  ഈ സാധനം, ഡെലിവർ ചെയ്യുകയാണെങ്കിൽ സ്വീകരിക്കുന്ന ആളുടെ പേരും ഫോൺ നമ്പറും ഒപ്പും വാങ്ങേണ്ടതാണ്. അഥവാ ഈ ഷിപ്മെന്റിന്റെ തുക എക്സ്ചേഞ്ച്വഴി ആണ്വന്നതെങ്കിൽ അതിന്റെ റെസിപ്റ്റും സാധനം സ്വീകരിച്ചതിന്റെ രേഖയും മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്ലോഡ്ചെയ്യുക.{'\n'}


                    If a customer has more than one box of products, definitely prepare the packing list. The format of the packing list is given in Excel format. If the item is delivered, the recipient\'s name, phone number and signature must be collected. Or if the amount of this shipment is through Exchange, upload the receipt and recipients proof in the mobile application.{'\n'}{'\n'}



                    <Text style={styles.heading}> 4 - CREDIT PAYMENT RECEIPT</Text>{'\n'}


                    കടം വാങ്ങിയ പണം തിരിച്ചടക്കുമ്പോൾ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ {'\n'}

                    Things to be considered when paying back borrowed money{'\n'}

                    1. പണം നൽകിയ കസ്റ്റമറുടെ അക്കൗണ്ടിലൂടെയാണോ പണം സ്വീകരിച്ചതെന്നു ഉറപ്പ്വരുത്തുക {'\n'}

                    Make sure the money is received through the customer\'s account{'\n'}

                    • മുൻകാലങ്ങളിൽ തെറ്റു സംഭവിച്ചിട്ടുണ്ട്. ഒരേപോലെ പേരുള്ള അക്കൗണ്ടിൽ പണം സ്വീകരിച്ചിട്ടു കസ്റ്റമേഴ്സുമായി വാക്കു തർക്കത്തിലേർപ്പെടേണ്ടി വന്നിട്ടുണ്ട്.{'\n'}

                    Mistakes are happened in the past. Customers had come to terms with word due to similarity on same named accounts{'\n'}

                    2. ലഭിച്ച പണം ഏറ്റവും പഴയ കടം വാങ്ങിയ ഇൻവോയ്‌സ്‌ വഴി സ്വീകരിക്കുക {'\n'}

                    Accept the proceeds from the oldest credit borrowed invoice {'\n'}

                    • എങ്കിൽ മാത്രമേ കടം കൊടുത്തതും പണം തന്നതുമായ കട പരിധികൾ അറിയാൻ സാധിക്കു{'\n'}

                    Only then you may know the limits of the lender and borrower{'\n'}

                    3 റെസിപ്റ്റ് അടിച്ച ശേഷം കിട്ടുന്ന പ്രിന്റിൽ കസ്റ്റമർ തന്ന പണത്തിന്റ തുകയും ഇനി തരാനുള്ള ബാലൻ സ്തുകയുടെ ഡീറ്റെയ്ൽസും ഉണ്ടാകും. ആ പേപ്പർ ഒപ്പിട്ടു വാങ്ങി മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്‌ലോഡ്ചെയ്യുക. {'\n'}

                    After printing the receipt, these prints will contain the amount of cash paid by the customer and the amount of balance due for payment. Upload the paper into the mobile application after signature.{'\n'}

                    • കസ്റ്റമർ ഒപ്പിടുമ്പോൾ അവർ  അവരുടെ ബാലൻസ്‌തുകയുടെ കാര്യം മനസിലാക്കും. അത്അവരുടെ തന്നെ അക്കൗണ്ട് ആണെന്നു  ബോധ്യപ്പെടും{'\n'}

                    When the customer signs up, they understand their balance amount.  They will know that it is their own account{'\n'}{'\n'}

                    <Text style={styles.heading}> 5 - EXPENSES AND PAYMENTS </Text>{'\n'}


                    1. 	കൺട്രോൾറൂമിലെ അനുവാദം ഉള്ളവർ മാത്രമേ ഈ ഇടപാടുകൾ  ചെയ്യാൻ പാടുള്ളു{'\n'}

                    Only those who have permission from the control room can do these transactions.{'\n'}

                    2 കൃത്യമായി എന്തിനു വേണ്ടിയാണ്ചിലവാക്കിയതെന്നു അതിന്റ അക്കൗണ്ട്സെലക്ട്ചെയ്യുക. പണം കൊടുത്തവരുടെ കൈയിൽ നിന്ന്പ്രൂഫ് (ഇൻവോയ്‌സ്‌) വാങ്ങുക. നമ്മുടെ പ്രിൻറർ കോപ്പിയും പണം വാങ്ങിയവരുടെ പ്രൂഫും മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്‌ലോഡ്ചെയ്യുക{'\n'}

                    Select the account for what exactly it has been used. Take Proof (Invoice) from lenders. Upload our printed copy and proof of purchase to the mobile application. {'\n'}

                    3. 	പണം കൊടുത്തതിന്റെ മുഴുവൻ പ്രൂഫും അപ്‌ലോഡ്ചെയ്യുക. എപ്പോൾ അതിനെ പറ്റി കൺട്രോൾ റൂമിൽ നിന്ന്ചോദിച്ചാലും മറുപടി കൊടുക്കുക.{'\n'}

                    Upload complete proof of payment. Whenever there is a question from the control room, reply.{'\n'}{'\n'}

                    <Text style={styles.heading}> 6 - RMA </Text>{'\n'}


                    1. 	പ്രോഡക്റ്റ്നമ്മുടേത്ആണോന്നു  തിരിച്ചറിയുക {'\n'}
                    Identify whether the product is ours{'\n'}

                    • Warranty Sticker  ആപ്പിൽസ്കാൻചെയ്യുക {'\n'}
                    Scan the warranty sticker on App{'\n'}


                    2. 	ഇൻവോയ്‌സ്‌ ഇല്ലാതെവിറ്റസാധനംതിരിച്ചെടുക്കാൻപാടില്ല{'\n'}
                    Do not return the item sold without invoice{'\n'}


                    3. ഫിസിക്കൽഡാമേജുകൾക്കുകമ്പനി warranty കൊടുക്കുന്നതല്ല (പൊട്ടിയിരിക്കുക, വളഞ്ഞിരിക്കുക, കേബിൾ പൊട്ടിയിരിക്കുക തുടങ്ങിയവ). ചില സ്ക്രീനുകൾക്കു   ചെറിയ പൊട്ടലുകൾ ഉണ്ടെങ്കിൽ നമുക്കു പെട്ടെന്നു കണ്ടു പിടിക്കാൻ പറ്റില്ല. അതു കൊണ്ട്സ്ക്രീൻ RMA വന്നാൽ ടെക്നീഷ്യന്റെ കൈയിൽ കൊടുത്തു ഡാമേജ് ഇല്ലന്നു ഉറപ്പു വരുത്തുക. ഫിസിക്കൽ ഡാമേജ് ഉള്ള പ്രോഡക്റ്റ് RMA സെക്ഷനിൽ കൊണ്ടു വന്നാൽ (warranty കഴിഞ്ഞത്) ആരാണോ അത്സ്വീകരിക്കുന്നത് അവർക്കാണ്അതിന്റെപൂർണ ഉത്തരവാദിത്വം{'\n'}

                    The company does not provide warrantee physical damages (break, bend, cable damage etc.). If some screens have small fractures, we cannot detect them immediately. So when the screen RMA comes, make sure the technician has it in his hand and there are no damages. When a product with a physical damage is brought into the RMA section (whose warranty finishes) the complete responsibility belongs to the person who receives it.{'\n'}

                    4. RMA സ്വീകരിക്കുന്നതിനായിട്ട് ഒരു ആപ്പ്ളിക്കേഷൻ ഉണ്ടാക്കിയിട്ടുണ്ട്. ആ ആപ്പ്ളിക്കേഷനിൽ RMA കുറിച്ചുള്ള എല്ലാ വിവരങ്ങളും അപ്‌ലോഡ്ചെയ്യുക{'\n'}

                    An application has been created to accept RMA. All information about RMA has to be uploaded in that application{'\n'}{'\n'}

                    <Text style={styles.heading}>  7 - SERVICE ATTENDING </Text>{'\n'}


                    1.	ജോബ് എന്റർ ചെയ്യാതെ ഒരു ഡിവൈസും സർവീസ്സെന്ററിൽ കയറ്റാൻ പാടില്ല. {'\n'}

                    No devices can be loaded into the service center without entering the job.{'\n'}

                    • പലപ്പോഴും ജോബ് എന്റർ ചെയ്യാതെ ഡിവൈസുകൾ സർവീസ്സെന്ററിൽ കാണാൻ കഴിഞ്ഞിട്ടുണ്ട്. അതിനു പല കാരണമാണ്പറയാറുള്ളത്.{'\n'}

                    Devices can be found in the service center without entering the job. There are many reasons for it.{'\n'}

                    2. സെർവീസിനായി ഡിവൈസ്കൊണ്ടു വന്നാൽ കസ്റ്റമറിനെ പേടിപ്പിക്കുന്ന വിധത്തിൽ സംസാരിക്കാതിരിക്കുക. എത്ര വലിയ പ്രശ്നമായാലും ചെറിയ കാര്യമാണെന്നു പറഞ്ഞു തുടങ്ങുക. മറ്റെന്തെങ്കിലും വലിയ പ്രശ്നമുണ്ടെങ്കിൽ കസ്റ്റമറിനെ അറിയിച്ചിട്ട് അനുവാദം വാങ്ങി മാത്രമേ ചെയ്യുകയുള്ളൂ എന്ന് അവരെ ബോധ്യപ്പെടുത്തുക. {'\n'}

                    If any device is brought for service, do not speak in a manner that scares the customer. Begin by saying no matter how big a problem is. If there is any other major problem, inform the customer and let them know that you will continue only after obtaining permission.{'\n'}

                    • ഡിവൈസ്കംപ്ലൈന്റ്റ് ആയി വരുന്നവരുടെ മാനസികാവസ്ഥ മനസിലാക്കുക. അവരെ സാവധാനം കാര്യങ്ങൾ പറഞ്ഞു മനസിലാക്കുക{'\n'}

                    Understand the mentality of those who come with a complaint device.  Tell them the things slowly{'\n'}

                    3.	ജോബ്ഷീറ്റ് ഇട്ടു ഡിവൈസ്ടെക്‌നിഷ്യനു കൈമാറുക. ഓൺലൈൻ സെക്ഷൻ ഉള്ളതു കൊണ്ട് എല്ലാം അതിന്റേതായ  സമയത്തു ചെയ്യുക {'\n'}

                    Put the job sheet and hand it over to the device technician. Having an online section, do it all in its own time{'\n'}

                    • ജോബ് ഇട്ടു സർവീസ്ടൈമിൽ തന്നെ കൈമാറുക. നിങ്ങളുടെ കൈയിൽ വെച്ചാൽ കസ്റ്റമർക്കു അപ്ഡേഷൻ കൊടുക്കാൻ സാധിക്കില്ല. {'\n'}

                    Put the job and handover it on service time.  If it is kept on your hand customer will not be able to receive anyupdation.{'\n'}

                    4 ടെക്നിഷ്യൻ വർക്ക്തീർത്തു കഴിയുമ്പോൾ ഡിവൈസ്കസ്റ്റമറിന്കൊടുക്കാൻ വേണ്ടി റെഡി ആക്കി വെക്കുക{'\n'}

                    When the technician has finished the work, keep the device ready for delivery to the customer{'\n'}{'\n'}

                    <Text style={styles.heading}> 8 – TECHNICIANS </Text>{'\n'}

                    1 	ജോബ്ഷീറ്റ് ഇല്ലാതെ ഒരു ഡിവൈസുകളും സ്വീകരിക്കാൻ പാടില്ല. {'\n'}
                    No devices should be accepted without a job sheet.{'\n'}

                    • ജോബ് എന്റർ ഇല്ലാത്ത ഡിവൈസ്കണ്ടെത്തിയാൽ ഒരു ഒഴിവു കിഴിവും കേൾക്കില്ല. കൂടാതെ പിഴയും കണ്ടെത്തുന്ന ഡിവൈസ്കമ്പനി റിക്കവർ ചെയ്യുന്നതുമായിരിക്കും. {'\n'}
                    If you find a device that does not have a job entered, no expectation will be heard.  The company will also recover the fine for device.{'\n'}

                    2. ഡിവൈസ്കിട്ടിയാലുടൻ എസ്റ്റിമേറ്റ്കൊടുത്തു അപ്പ്രൂവൽ കിട്ടാൻ വേണ്ടി കാത്തിരിക്കുക {'\n'}

                    As soon as you get the device, give an estimate and wait for approval{'\n'}

                    • ഓൺലൈൻ ആയതു കൊണ്ട്കസ്റ്റമർക്ക് വെബ്സൈറ്റ് നോക്കാവുന്നതാണ്{'\n'}
                    Because it is online, the customer can look through the website{'\n'}

                    3. സ്പെയർ പാർട്സിനു വേണ്ടി കാത്തിരിക്കുകയാണെങ്കിൽ ആ വിവരം പ്രത്യേകം അപ്ഡേറ്റ്ചെയ്യുക{'\n'}

                    If you are looking for spare parts please update that information seperately{'\n'}

                    4	അഥവാ സ്പെയർ കിട്ടാൻ താമസമുണ്ടെങ്കിൽ കൺട്രോൾ റൂമുമായി ബന്ധപ്പെടുക.  എന്നിട്ടു മാത്രമേ കസ്റ്റമറിനോട് അറിയിക്കാൻ പാടുള്ളു. {'\n'}

                    Contact the Control Room if you are late to get the spare parts. Only then customer can be informed.{'\n'}

                    5	എന്തെങ്കിലും	കാരണവശാൽ ഡിവൈസ്റിപ്പയർ ചെയ്യാതെ തിരിച്ചു കൊടുക്കേണ്ടി വന്നാൽ	അല്ലെങ്കിൽ	ജോബ്ക്യാൻസൽ	ചെയ്യേണ്ടി വന്നാൽ   കൺട്രോൾറൂമിൽ	അറിയിക്കുക. കൺട്രോൾറൂമിൽ	നിന്നും ജോബ്ക്യാൻസൽ ചെയ്തു തരുന്നതായിരിക്കും.{'\n'}

                    If for any reason the device isnot repaired and returned back or the job is canceled, notify the control room. Job cancels from the control room{'\n'}

                    • ജോബ്ക്യാൻസൽ ചെയ്യുകയാണെങ്കിൽ ആ ജോബിൽ ഏതെങ്കിലും പാർട്സ് ഇഷ്യൂ ചെയ്തിട്ടുണ്ടോ എന്ന്നോക്കുക.  ഉണ്ടെങ്കിൽ അത്റിട്ടേൺ ചെയ്താൽ മാത്രമേ ജോബ്ക്യാൻസൽ ചെയ്യാൻ പറ്റുകയുള്ളു.{'\n'}

                    If a job is cancelled, see if any parts of the job are issued. Job cancellation canbe done only if it is returned.{'\n'}{'\n'}

                    <Text style={styles.heading}> 9 – CASHIER OR IN CHARGE -</Text> {'\n'}

                    1. Salesman ഷോപ്പിൽ ഇല്ലെങ്കിൽ കസ്റ്റമറിനെ ഡീൽ ചെയ്യുക.{'\n'}
                    Deal with the customer if the salesman is not in the shop{'\n'}

                    2. എല്ലാ ദിവസവും ഉള്ള ഇടപാടുകൾ മൊബൈൽ ആപ്പ്ളിക്കേഷനിൽ അപ്ലോഡ്ചെയ്യുക {'\n'}
                    Upload transactions on a daily basis to the mobile application{'\n'}

                    3. Follow instructions 1 to 5{'\n'}{'\n'}


                    <Text style={styles.heading}> 10 – ACCOUNTANT / BACKGROUND + SALES </Text>{'\n'}

                    1. അക്കൗണ്ടന്റ് ആയിട്ടുള്ള വ്യക്‌തി ഷോപ്പിൽ ഇരിക്കേണ്ടി വന്നാൽ  I മുതൽ VII വരെഉള്ള  നിർദ്ദേശങ്ങൾ പാലിക്കുക.{'\n'}

                    If the accountant is sitting in the shop, follow the instructions from I to VII{'\n'}

                    2. പർച്ചെയ്‌ സ്സെക്ഷനിൽ ഇരിക്കുന്ന അക്കൗണ്ടന്റ് ആണെങ്കിൽ{'\n'}
                    If the accountant sitting in the Purchase Section {'\n'}

                    i. ആദ്യമായി വിദേശത്തു നിന്നു വന്ന സാധനങ്ങൾ നമ്മുടെ സിസ്റ്റത്തിൽ ഉണ്ടോയെന്നു പരിശോധിക്കുക. {'\n'}

                    First, check to see if there are any foreign items in our system{'\n'}

                    ii. അതിന്റെ മുൻപുള്ള വിലയിൽ വ്യത്യാസം ഉണ്ടോയെന്നു പരിശോധിക്കുക. വ്യത്യാസമുണ്ടെങ്കിൽ അത്മാനേജരും ബോസും ആയിട്ട്ചർച്ച ചെയ്തു വില അപ്ഡേറ്റ്ചെയ്യുക.{'\n'}

                    Check if there is any difference in the earlier rate. If there is a difference, discuss it with the manager and boss and update the price.{'\n'}

                    iii. അഥവാ വന്ന സാധനം പുതിയ ഐറ്റം ആണെങ്കിൽ ബാക്ക്ഗ്രൗണ്ട്ടീമുമായി തീരുമാനിച്ചു  അതിന്റെ ഫ്രൈറ്റ്ചാർജ്, മിനിമം സെയിൽസ്റേറ്റ്, സെയിൽസ്റേറ്റ് എന്നിവ  നിശ്ചയിച്ചു അപ്ഡേറ്റ്ചെയ്യുക.{'\n'}

                    If the item is a new, discuss with the background team to update its freight charge, minimum sales rate and sales rate.{'\n'}

                    iv. 	ഒരു കാരണവശാലും സ്വന്തം ഇഷ്ടപ്രകാരം ഒന്നും ക്രിയേറ്റ്ചെയ്യാൻ പാടുള്ളതല്ല. {'\n'}
                    Nothing should be created of your own interest in any circumstances.{'\n'}
                    3. പർച്ചെയ്‌സ്ചെയ്യുമ്പോൾ വിദേശത്തു നിന്നും വന്ന സാധനങ്ങളുടെ ഫ്രൈറ്റ് ആ  ഷിപ്പിങ്കമ്പനിയുടെ പേരിൽ അപ്ഡേറ്റ്ചെയ്യുക. {'\n'}
                    During purchasing, the freight charge of foreign products should be updated in that shipping company.{'\n'}

                    • കാരണം ഫ്രൈറ്റ്ചാർജ് എക്‌സ്പെൻസ് അല്ല. അത്സാധനത്തിന്റെ ലേബർകോസ്റ്റ്‌ ആണ്. അവർക്കു ആ അക്കൗണ്ടിൽ നിന്നും മാത്രമേ ക്യാഷ്കൊടുക്കാൻ പാടുള്ളു.{'\n'}
                    Because freight charge is not an expense. That is the Labour Cost of Goods.Cash has to be paid from that account.{'\n'}

                    4. 	Duty Payment{'\n'}
                    ഈ പർച്ചെയ്സിൽ ഡ്യൂട്ടി കൊടുക്കേണ്ടി വന്നാൽ ആ ക്യാഷ്ഷിപ്പിങ്കമ്പനിയുടെ അക്കൗണ്ടിൽ നിന്നും കൊടുക്കുക. കാരണം ഡ്യൂട്ടി + ഫ്രൈറ്റ് ആണ്നമ്മൾ പ്രൊഡക്ടിൽ കാണിച്ചിരിക്കുന്നത്. {'\n'}
                    If duty has to be paid on this purchase, pay it from the account of that  shipping company. Because duty + freight is what we have shown in the product{'\n'}
                    5. 	ഈ സാധനം പർച്ചെയ്‌സ്ചെയ്യുന്നതിന്മുൻപും ശേഷവും സപ്പ്ളെയറുടെ അക്കൗണ്ട്പരിശോധിക്കുക. {'\n'}
                    Check the supplier\'s account before and after purchasing this item{'\n'}
                    6. പർച്ചെയ്സ്ചെയ്തു കഴിഞ്ഞു ഷിപ്മെന്റ്നോട്ടീസും അനുബന്ധ പേപ്പറുകളും ആപ്പിൽ അപ്‌ലോഡ്ചെയ്യുക.{'\n'}

                    After purchasing, upload the shipment notice and related papers in the App{'\n'}

                    7. സാധനംഎവിടെയാണുവെച്ചിരിക്കുന്നതെന്നുഷിപ്മെന്റ്നോട്ടീസിൽരേഖപെടുത്തിയിട്ടുണ്ടോഎന്നുപരിശോധിക്കുക {'\n'}
                    Verify whether it is mentioned in the shipment notice where the product is placed {'\n'}
                    8. ലോക്കൽ പർച്ചെയ്‌സ് ആണെങ്കിൽ ബിൽ കിട്ടിയാലുടൻ മേൽ പറഞ്ഞ (ഒന്നു മുതൽ നാലു വരെ) കാര്യങ്ങൾ പരിശോധിച്ചു അതു പോലെ ചെയ്യുക. {'\n'}

                    If it\'s a local purchase, check the above (one to four) things as soon as you get the bill.{'\n'}
                    9. 	ടാക്സ്ബിൽ ആണെങ്കിലും അല്ലെങ്കിലും അതു ആപ്പിൽ അപ്ഡേറ്റ്ചെയ്യുക. അപ്ഡേറ്റ്ചെയ്യുന്ന വിധം പ്രാക്റ്റീസ്ചെയ്യുക. {'\n'}
                    Whether it\'s a tax bill or not, update it in your app. Practice how to update{'\n'}
                    • കാരണം മൂന്ന്മാസം കൂടുമ്പോൾ ടാക്സ്ഫയൽ ചെയ്യുന്ന സമയത്തു നമ്മൾ അടച്ച ടാക്സ് ഒരു ക്ലിക്കിൽ അറിയാൻ സാധിക്കും.{'\n'}
                    This is because when we file tax every three months, we can know the tax we paid just by a click{'\n'}
                    10. 	എക്സ്പെൻസിന്റെ എൻട്രി കൃത്യമായി ആപ്പിൽ അപ്‌ലോഡ്ചെയ്യുക. ടാക്സ് ഉള്ളതാണെങ്കിലും അല്ലെങ്കിലും ആപ്പിൽ അപ്‌ലോഡ്ചെയ്യുക. {'\n'}
                    Upload Expense entry properly to the app. whether there is tax or not upload it in the app.{'\n'}

                    • കാരണം നമ്മൾ കമ്പനിക്കു വേണ്ടി ചിലവാക്കുന്ന ടാക്സ്നമുക്കു റീഫണ്ട്കിട്ടുന്നതാണ്. അതു കൊണ്ട് ഒറ്റ ക്ലിക്കിൽ നമ്മൾ ചിലവാക്കിയ പണത്തിന്റെ ടാക്സ് എത്രയാണെന്ന് അറിയാൻ സാധിക്കും.{'\n'}

                    This is because tax paid for a company will be refunded.  Sowe can figure out how much tax for the money we spend by a single click.{'\n'}{'\n'}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomButton title="Accept" onPress={() => { if (updateCheckedState) { updateCheckedState(true) } navigation.goBack() }} />

                    <CustomButtonExit title="Reject" onPress={() => { if (updateCheckedState) { updateCheckedState(false) } navigation.goBack() }} />

                </View>




            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        // marginLeft: 14,
        marginHorizontal: 20
    },

    heading: {
        fontWeight: 'bold',
        marginBottom: 14,
    },

    buttonContainer: {
        // backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 10,
        borderWidth: 1,
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
        borderWidth: 1,
        borderColor: "#ffa600",
        // width: "80%",

    },
    exitText: {
        fontWeight: "bold"
    }
});