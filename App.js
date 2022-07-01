import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Moeda from './Componentes/Moeda';
import APIMoedas from './Componentes/Api';

export default function App() {

  const [moeda, setMoeda] = useState("");
  //const [libra, setLibra] = useState("");

  async function precoDolar() {
    const resposta = await APIMoedas.get('json/last/USD-BRL');
    setMoeda(resposta.data.USDBRL);
  }

  async function precoEuro() {
    const resposta = await APIMoedas.get('json/last/EUR-USD');
    setMoeda(resposta.data.EURUSD);
  }

  function limpar() {
    setMoeda("");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de câmbio</Text>
      <Text style={styles.p}>Escolha qual modeda deseja ver a cotação!</Text>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.btn}
          onPress={precoDolar}>
          <Text style={styles.text}>USD$ para R$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={precoEuro}>
          <Text style={styles.text}>EUR$ para USD$</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cotacao}>
        <Moeda data={moeda} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cotacao: {
    display: 'flex',
  }, 

  box: {
    display: 'flex',
    flexDirection: 'row'
  },

  title: {
    fontSize: 20,
    fontWeight: 600
  },

  p: {
    fontWeight: 400,
    fontSize: 17
  },

  text: {
    fontWeight: 500,
    fontSize: 15
  },

  btn: {
    marginTop: '1%',
    width: 130,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: .5,
  },
});
