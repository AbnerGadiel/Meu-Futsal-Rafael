import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Jogo() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O Futsal</Text>
      <Text style={styles.description}>
        O futsal é uma variante do futebol jogada em uma quadra menor e principalmente em ambientes fechados.
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Regras Básicas</Text>
        <Text style={styles.item}>• 5 jogadores de cada lado.</Text>
        <Text style={styles.item}>• Substituições ilimitadas.</Text>
        <Text style={styles.item}>• Dois tempos de 20 minutos cronometrados.</Text>
        <Text style={styles.item}>• A bola é menor e quica menos que a de futebol de campo.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 25 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#003893', marginTop: 40 },
  description: { fontSize: 16, color: '#666', marginVertical: 20, lineHeight: 24 },
  section: { backgroundColor: '#f0f4ff', padding: 20, borderRadius: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#003893', marginBottom: 10 },
  item: { fontSize: 16, color: '#444', marginBottom: 8 }
});