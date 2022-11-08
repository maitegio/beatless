import { StyleSheet, Text, View, Image } from "react-native";
export const home = () => (
  <View>
    <Text style={styles.titulo}>OLA</Text>
    <Text style={styles.description}> MINHA BANDA FAV É THE BEATLES</Text>
    <View style={styles.top}>
      <Image
        source={{
          uri: "https://img.vagalume.fm/1497301149923842/bg-low",
        }}
        style={styles.imagem}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  description: {
    textAlign: "center",
    margin: 16,
    fontSize: 18,
  },
  imagem: {
    width: 305,
    height: 159,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
