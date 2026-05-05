import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Futsal Brasil 🇧🇷</Text>

      <View style={styles.listContainer}>
        {jogadores.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card}
            onPress={() => router.push({ 
              pathname: "/detalhes", 
              params: { id: item.id } 
            })}
          >
            <View style={styles.cardContent}>
              <Image source={item.foto} style={styles.fotoLista} />
              <View>
                <Text style={styles.playerName}>{item.nome}</Text>
                <Text style={styles.playerPos}>{item.posicao}</Text>
              </View>
            </View>

            <Text style={styles.arrow}>❯</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#003893', textAlign: 'center', marginVertical: 25 },
  listContainer: { marginBottom: 30 },
  card: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 12,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: '#FFD700'
  },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  fotoLista: { width: 55, height: 55, borderRadius: 10, marginRight: 15 },
  playerName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  playerPos: { fontSize: 14, color: '#666' },
  arrow: { color: '#003893', fontSize: 18 },
});