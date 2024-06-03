import { Alert, Button, View, image,StyleSheet,Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to us the app."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log("Image Info ::  ",image);
    setPickedImage(image.uri);
    console.log("Image Info ::  ",pickedImage);
  }

  let imagePreview = <Text>No image taken yet.</Text>;
  if (pickedImage) {
    imagePreview = <Image styles = {styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imageView}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imageView: {
      width: '100%',
      height: 200,
      marginVertical:8,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:Colors.primary100,
      borderRadius:4
    }
    ,image:{
        width: '100%',
        height: '100%',
    }
  });
  