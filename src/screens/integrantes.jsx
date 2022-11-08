import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const integrantes = () => (
  <ScrollView>
    <View>
      <View>
        <Text style={styles.titulo}>Albuns:</Text>
      </View>
      <View style={styles.div}>
        <ImageBackground  style={styles.imagem}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/0/00/Paul_McCartney_Headshot_%28cropped%29.jpg",
          }}
        >
          <View style={styles.divImagem}>
            <Text style={styles.texto}>Paul McCartney</Text>
          </View>
        </ImageBackground>
        <ImageBackground  style={styles.imagem}
          source={{
            uri: "https://marciatravessoni.com.br/wp-content/uploads/2021/09/imagine-john-lennon-2.jpeg",
          }}
        >
          <View style={styles.divImagem}>
          <Text style={styles.texto}>John Lennon</Text>
          </View>
        </ImageBackground>
        <ImageBackground  style={styles.imagem}
          source={{
            uri: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2021/11/29/1568152848-0c87c3a-george-harrison-tocando-guitarra-1024x683.jpg",
          }}
        >
          <View style={styles.divImagem}>
          <Text style={styles.texto}>George Harrison</Text>
          </View>
        </ImageBackground>
        <ImageBackground style={styles.imagem}
          source={{
            uri: "https://alaricocelestino.files.wordpress.com/2015/04/ringo.jpg",
          }}
        >
          <View style={styles.divImagem}>
          <Text style={styles.texto}>Ringo Starr</Text>
          </View>
        </ImageBackground>
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
  divImagem: {
    width: 400,
    height: 400,
    
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    marginTop: 20,
  },
  texto:{
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginTop: 150,
    backgroundColor: 'black',
    opacity: 0.4,
  }

});
