import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Header from '../../../components/header'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Loader } from '../../../components/loader'

const FurtherAss = ({ navigation, route }) => {
    const { businessData } = route?.params
    const [checkBoxOne, setCheckBoxOne] = useState(false)
    const [checkBoxTwo, setCheckBoxTwo] = useState(false)
    const [checkBoxThree, setCheckBoxThree] = useState(false)
    const [checkBoxFour, setCheckBoxFour] = useState(false)
    const [checkBoxFive, setCheckBoxFive] = useState(false)
    const [checkBoxSix, setCheckBoxSix] = useState(false)
    const [checkBoxSeven, setCheckBoxSeven] = useState(false)
    const [checkBoxEight, setCheckBoxEight] = useState(false)
    const [note, setNote] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        const assistanceData = {
            ...businessData,
            furtherAssistanceData: {
                bookingManagentServices: checkBoxOne,
                offlineAndOnlineBillingIntegration: checkBoxTwo,
                staffManagementServices: checkBoxThree,
                inventoryMangementServices: checkBoxFour,
                salesFocusedCampaigns: checkBoxFive,
                businessReportAndInsights: checkBoxSix,
                pointOfSalesSystems: checkBoxSeven,
                taxServices: checkBoxEight,
                note: note
            }
        }
        console.log(assistanceData, "assistanceData");
        navigation.navigate('SetPasscode', { assistanceData })

    }

    return (
        <Root>
            <View style={{ backgroundColor: '#fff' }}>
                <Loader loading={loading} />
                <Header name={'arrow-back'} text={'Further Assitance'} nameIcon={'alert'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
                <View style={styles.root}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
                        <View style={{ paddingVertical: 15 }}>
                            <CustomHeaderText text={"Do you wish to have any of the following services integrated?"} />
                            <Text>(You can make multiple Selection)</Text>
                        </View>
                        <View>
                            {/* checkbox one */}
                            <View style={styles.cont}>
                                <Text style={styles.text}>Booking Management Services</Text>
                                <Pressable onPress={() => setCheckBoxOne(!checkBoxOne)} >
                                    {!checkBoxOne ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Offline and Online Billing Integration</Text>
                                <Pressable onPress={() => setCheckBoxTwo(!checkBoxTwo)} >
                                    {!checkBoxTwo ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Staff Management Services</Text>
                                <Pressable onPress={() => setCheckBoxThree(!checkBoxThree)} >
                                    {!checkBoxThree ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Inventory Management Services</Text>
                                <Pressable onPress={() => setCheckBoxFour(!checkBoxFour)} >
                                    {!checkBoxFour ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View>
                                <View style={styles.contPart}>
                                    <View>
                                        <Text style={styles.text}>Sales Focused Campaigns</Text>
                                        <Text style={styles.textAdd}>(Solely focuses on sales - Might be required to offer discounts)</Text>
                                    </View>
                                    <Pressable onPress={() => setCheckBoxFive(!checkBoxFive)} style={{ justifyContent: 'center' }}>
                                        {!checkBoxFive ?
                                            <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                            :
                                            <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                        }
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Business reports and Insights</Text>
                                <Pressable onPress={() => setCheckBoxSix(!checkBoxSix)} >
                                    {!checkBoxSix ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Point of Sales (POS) System</Text>
                                <Pressable onPress={() => setCheckBoxSeven(!checkBoxSeven)} >
                                    {!checkBoxSeven ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                            <View style={styles.cont}>
                                <Text style={styles.text}>Tax Services</Text>
                                <Pressable onPress={() => setCheckBoxEight(!checkBoxEight)} >
                                    {!checkBoxEight ?
                                        <View style={[{ borderColor: "#A3A1A1" }, styles.box]}></View>
                                        :
                                        <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                                    }
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>If any other, Please Specify:</Text>
                            <View style={styles.inputCont}>
                                <TextInput
                                    multiline={true}
                                    value={note}
                                    onChangeText={(text) => setNote(text)}

                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingVertical: 75, marginBottom: 100 }}>
                            <View style={{ flex: 1 }}>
                                <CustomBtn text={'Back'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <CustomBtn text={'Submit'} type={'PRIMARY'} onPress={onSubmit} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </Root>
    )
}

export default FurtherAss

const styles = StyleSheet.create({
    root: {
        padding: 20,
        // backgroundColor: "#fff",
        // paddingBottom: 250,
        flexGrow: 1
    },
    text: {
        color: "#000"
    },
    cont: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    box: {
        height: 22,
        width: 22,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2
    },
    contPart: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 10
    },
    textAdd: {
        fontSize: 11,
        color: '#000'
    },
    inputCont: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        minHeight: 100,
        borderColor: "#A3A1A1",
        paddingHorizontal: 10
    }
})