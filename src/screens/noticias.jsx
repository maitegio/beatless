import { Image, StyleSheet, Text, View } from "react-native";

export const noticias= () => (
    <View>
        <Text style={styles.titulo}>OLA</Text>

    <View>
    <Text style={styles.titulo}>Noticias</Text>
    <View>
      <Text style={styles.texto}>
      john lennon morreu com 40 anos baleado por um fã na porta de sua casa, acompanhado de sua mulher Yoko Ono. 
      </Text>
    </View>
    <View>
      <Text style={styles.texto}>
      George Harrison morreu aos 58  anos vitima de um cancer no pulmão em 2001.
      </Text> 
    </View>
    <View style={styles.div}>
     <Image
  style={styles.image}
  source={{
    uri: "https://rollingstone.uol.com.br/media/_versions/geroge-harrison-john-lennon-ap-arquivo_widelg.jpg",
  }}
/>
</View>
        </View>
        </View>
);

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        margin: 24,
        fontSize: "60px",
      },     
    image:{
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
    },
    div: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
      },

});