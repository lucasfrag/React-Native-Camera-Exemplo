import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

export default class App extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> TIRAR FOTO </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 1 };
      const data = await this.camera.takePictureAsync(options);
      
      console.log("[React Native Camera] Caminho da imagem no cache: " + data.uri);

    
      // Salvando a imagem no armazenamento do sistema
      CameraRoll.save(data.uri);
      console.log("[React Native CameraRoll] Imagem salva com sucesso! Acesse a Galeria para visualiza-la.")
      // Ira abrir um pequeno alerta para o usuário saber que a imagem foi salva
      ToastAndroid.show("Imagem salva com sucesso!", ToastAndroid.SHORT);

    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});