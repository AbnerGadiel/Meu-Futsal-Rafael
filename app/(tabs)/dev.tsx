import { View, Text, StyleSheet, Image } from 'react-native';

export default function Dev() {
  return (
    <View style={styles.container}>
      <View style={styles.profileArea}>
        <View style={styles.photoPlaceholder}>
          <Text style={styles.photoText}>Dev</Text>
        </View>
        <Text style={styles.name}>Abner e Vinicius</Text>
        <Text style={styles.role}>Desenvolvedor React Native</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.info}>Projeto acadêmico - Futsal App 2025</Text>
        <Text style={styles.tech}>Tecnologias: Expo, React Native, TypeScript</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#009739', justifyContent: 'center', alignItems: 'center', padding: 20 },
  profileArea: { alignItems: 'center' },
  photoPlaceholder: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  photoText: { fontWeight: 'bold', color: '#009739' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  role: { fontSize: 16, color: '#FFD700', marginTop: 5 },
  footer: { position: 'absolute', bottom: 40, alignItems: 'center' },
  info: { color: '#fff', fontSize: 12 },
  tech: { color: '#fff', fontSize: 12, opacity: 0.8 }
});