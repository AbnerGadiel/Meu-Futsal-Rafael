import React from 'react';
import { View, Text } from 'react-native';

export default function Detalhes({ route }) {
  const { jogador } = route.params;
  return (
    <View style={{padding:20}}>
      <Text>{jogador.nome}</Text>
      <Text>Idade: {jogador.idade}</Text>
      <Text>Posição: {jogador.posicao}</Text>
      <Text>Número: {jogador.numero}</Text>
      <Text>Equipe: {jogador.equipe}</Text>
    </View>
  );
}
