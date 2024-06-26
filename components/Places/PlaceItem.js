import { View ,Pressable,Text,Image,StyleSheet} from "react-native";

function PlaceItem({place},onSelect) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri:place.ImageUri}} />
      <View>
        <Text> {place.title}</Text>
        <Text> {place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#94d3a6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  