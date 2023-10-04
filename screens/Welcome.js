import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';


const Welcome = ({ navigation }) => {
  
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.primary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/upangbulletinlogo.png")}
                        style={{
                            height: 250,
                            width: 250,
                            position: "absolute",
                            top: 65,
                            left: 85,
                            borderRadius: 20,
                            transform: [
                                { translateX: 1 },
                                { translateY: 50 },
                                { rotate: "0deg" }
                            ]
                        }}
                    />

                    
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 800,
                        color: COLORS.secondary,
                        transform:[
                            { translateX: 25 },
                            { translateY: 10 },
                        ]
                    }}>UPANG BULLETIN</Text>
                    

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.white,
                            marginVertical: 1,
                        }}>Stay updated with the latest news and events</Text>
                        <Text style={{
                            fontSize: 18,
                            marginLeft:150 ,
                            color: COLORS.white,
                        }}>within the</Text>
                          <Text style={{
                            fontSize: 19.5,
                            fontWeight: 600,
                            color: COLORS.secondary,
                            marginLeft: 80
                        }}>University of Pangasinan.</Text>
                    </View>

                    <Button
                        title="JOIN NOW"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            width: "100%",
                            marginTop: 0,
                            fontWeight: 600,
                            backgroundColor: COLORS.secondary,
                            color: COLORS.white
                            
                           
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.secondary,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome