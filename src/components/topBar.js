import React, { useState } from "react";
import { View, StatusBar, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const TopBar = ({ props, navigation }) => {
    return (
        <View style={styles.header}>
            <StatusBar
                animated={true}
                backgroundColor="#fff"/>
            <View
                style={styles.profile}>
                
                    <Text style={styles.headerText}>
                        TCG Marketplace
                    </Text>
                    <Image
                        source={require('../assets/pokemon.jpeg')}
                        style={styles.image}
                    />

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    profile: {
        borderColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 50,
        height: 50,
        position: 'relative',
        
    },
    headerText: {
        fontSize: 22,
        fontFamily: 'Inter-Bold',
        fontWeight: 'bold',
        color: '#000'
    },
});
export default TopBar;
