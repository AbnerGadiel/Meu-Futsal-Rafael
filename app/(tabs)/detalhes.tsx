import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Detalhes() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const jogadores = [
    { 
      id: 1, 
      nome: "Falcão", 
      idade: 45, 
      posicao: "Ala", 
      numero: 12, 
      equipe: "Brasil",
      foto: require('../../assets/images/falcao.jpg') 
    },
    { 
      id: 2, 
      nome: "Ferrão", 
      idade: 33, 
      posicao: "Pivô", 
      numero: 11, 
      equipe: "Brasil",
      foto: require('../../assets/images/ferrao.jpg') 
    },
    { 
      id: 3, 
      nome: "Gadeia", 
      idade: 34, 
      posicao: "Ala", 
      numero: 10, 
      equipe: "Brasil",
      foto: require('../../assets/images/gadeia.jpg')
    }
  ];

  const jogador = jogadores.find(j => j.id === Number(params.id));

  if (!jogador) {
    return (
      <View style={styles.container}>
        <Text>Jogador não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image source={jogador.foto} style={styles.fotoGrande} />

        <Text style={styles.nome}>{jogador.nome}</Text>
        <Text style={styles.equipe}>{jogador.equipe}</Text>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Posição</Text>
            <Text style={styles.value}>{jogador.posicao}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Número</Text>
            <Text style={styles.value}>#{jogador.numero}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Idade</Text>
            <Text style={styles.value}>{jogador.idade}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },

  backBtn: { marginTop: 50, marginBottom: 20 },
  backText: { color: '#003893', fontWeight: 'bold' },

  card: { 
    backgroundColor: '#fff', 
    borderRadius: 25, 
    padding: 30, 
    alignItems: 'center', 
    elevation: 5 
  },

  fotoGrande: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20, 
    borderWidth: 4, 
    borderColor: '#FFD700' 
  },

  nome: { fontSize: 26, fontWeight: 'bold' },
  equipe: { fontSize: 18, color: '#009739', marginBottom: 20 },

  infoGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%', 
    borderTopWidth: 1, 
    borderTopColor: '#eee', 
    paddingTop: 20 
  },

  infoBox: { alignItems: 'center' },
  label: { fontSize: 12, color: '#999' },
  value: { fontSize: 18, fontWeight: 'bold' }
});