
import React from "react";
import style from "./style";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { Fragment } from "react";
import Table from "./Table";

export default function Main(props) {

    return (
        <View style={style.box}>
            <Text style={style.title} > Jogo da Velha</Text> 
            <Table/>
        </View>    
    )
} 