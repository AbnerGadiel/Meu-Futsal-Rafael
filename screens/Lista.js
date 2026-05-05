import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import jogadores from '../data/jogadores';

export default function Lista({ navigation }) {
  return (
    <View style={{padding:20}}>
      {jogadores.map(j => (
        <TouchableOpacity key={j.id} onPress={()=>navigation.navigate('Detalhes',{jogador:j})}>
          <Text style={{fontSize:18,marginBottom:10}}>{j.nome}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={()=>navigation.navigate('Jogo')}>
        <Text>Ir para Jogo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Dev')}>
        <Text>Sobre Dev</Text>
      </TouchableOpacity>
    </View>
  );
}
