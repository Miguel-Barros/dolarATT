import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Moeda(props) {
    return (
        <>
            <Text style={styles.texto}>Moeda: {props.data.name} </Text>
            <Text style={styles.texto}>Valor de compra: {props.data.bid} </Text>
            <Text style={styles.texto}>Valor de venda: {props.data.ask}</Text>
            <Text style={styles.texto}>Valor maximo de compra:  {props.data.high}</Text>
            <Text style={styles.texto}>Valor minimo de compra:  {props.data.low}</Text>
        </>
    );
}



const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        marginTop: 10,
    },
});