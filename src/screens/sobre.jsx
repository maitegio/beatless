import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const sobre = () => (
    <ScrollView>
  <View>a
    <Text style={styles.titulo}>Sobre a banda:</Text>
    <View style={styles.div}>
      <Text style={styles.texto}>
        Os BEATLES são um fenomeno até hoje, os garotos de liverpool dominaram o
        mundo na decada de 60, os quatro, hoje com so dois vivos, tem suas
        musicas eternizadas até hoje. Musicas como Hey Jude, Help e Let it be
        são alguns e seus sucessos
      </Text>

    <Image
      style={styles.image}
      source={{
        uri: "https://media.npr.org/assets/img/2021/11/03/gettyimages-3276408-917c50b030a6ae2bd2fc846de49a5c75016e3035.jpg",
      }}
    />
        </View>
  </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  texto: {
    textAlign: "center",
    margin: 100,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 500,
  },
});
