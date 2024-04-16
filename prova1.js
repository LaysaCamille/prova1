//NOME: Laya Camille Viveiros Policapio Candido de Souza COD: 24171

import React, { useState, useEffect } from 'react'; // Importando o React, useState e useEffect
import { View, Text, TextInput, StyleSheet } from 'react-native'; // Importando os componentes necessários do React Native

const Cotacao = () => { // Definindo o componente Cotacao
  const [quantiaOrigem, setQuantiaOrigem] = useState(''); // Estado para armazenar a quantia de origem
  const [cotaçãoDestino, setCotacaoDestino] = useState(''); // Estado para armazenar a cotação de destino
  const [quantiaDestino, setQuantiaDestino] = useState(''); // Estado para armazenar a quantia de destino

  // Função para calcular a quantia na moeda de destino
  const calcularQuantiaDestino = () => {
    const quantia = parseFloat(quantiaOrigem); // Convertendo a quantia de origem para float
    const cotacao = parseFloat(cotaçãoDestino); // Convertendo a cotação de destino para float

    // Verificando se os valores são válidos e calculando a quantia na moeda de destino
    if (!isNaN(quantia) && !isNaN(cotacao)) {
      const quantiaCalculada = quantia / cotacao;
      setQuantiaDestino(quantiaCalculada.toFixed(2).toString()); // Atualizando o estado da quantia de destino
    } else {
      setQuantiaDestino(''); // Limpando o estado da quantia de destino se os valores não forem válidos
    }
  };

  // Efeito que é executado sempre que quantiaOrigem ou cotaçãoDestino mudam
  useEffect(() => {
    calcularQuantiaDestino();
  }, [quantiaOrigem, cotaçãoDestino]);

  return (
    <View style={styles.container}> {/* View principal com estilos do StyleSheet */}
      <Text style={styles.titulo}>Conversor de moedas</Text> {/* Texto do título */}
      <Text>Quantia na moeda de origem</Text> {/* Texto de indicação para a entrada de dados */}
      <TextInput
        style={styles.input}
        placeholder="Digite a quantia"
        value={quantiaOrigem}
        onChangeText={text => setQuantiaOrigem(text)} // Atualiza o estado da quantia de origem ao digitar
        keyboardType="numeric" // Define o teclado como numérico para facilitar a entrada de dados
      />
      <Text>Cotação na moeda de destino</Text> {/* Texto de indicação para a entrada de dados */}
      <TextInput
        style={styles.input}
        placeholder="Digite a cotação"
        value={cotaçãoDestino}
        onChangeText={text => setCotacaoDestino(text)} // Atualiza o estado da cotação de destino ao digitar
        keyboardType="numeric" // Define o teclado como numérico para facilitar a entrada de dados
        onBlur={calcularQuantiaDestino} // Chama a função para calcular a quantia de destino ao sair do campo de entrada
      />
      <Text>Quantia na moeda de destino</Text> {/* Texto de indicação para o resultado */}
      <Text style={styles.resultado}>{quantiaDestino}</Text> {/* Mostra a quantia de destino calculada */}
    </View>
  );
};

// Estilos definidos com StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flexbox com 1 para preencher todo o espaço disponível
    alignItems: 'center', // Centraliza os itens no eixo transversal
    justifyContent: 'center', // Centraliza os itens no eixo principal
    paddingHorizontal: 20, // Espaçamento horizontal de 20
  },
  titulo: {
    fontSize: 20, // Tamanho da fonte 20 para o título
    fontWeight: 'bold', // Fonte em negrito para o título
    marginBottom: 20, // Margem inferior de 20
  },
  input: {
    width: '100%', // Largura total do componente TextInput
    height: 40, // Altura de 40
    borderWidth: 1, // Borda com largura de 1
    borderColor: '#ccc', // Cor da borda cinza claro
    borderRadius: 5, // Bordas arredondadas com raio de 5
    marginBottom: 10, // Margem inferior de 10
    paddingHorizontal: 10, // Preenchimento horizontal de 10
  },
  resultado: {
    fontSize: 18, // Tamanho da fonte 18 para o resultado
    fontWeight: 'bold', // Fonte em negrito para o resultado
    marginTop: 10, // Margem superior de 10
  },
});

export default Cotacao; // Exporta o componente Cotacao
