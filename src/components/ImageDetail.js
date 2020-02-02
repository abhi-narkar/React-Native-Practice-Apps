import React from "react";
import { View, Text, Stylesheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
};

// const styles = Stylesheet.create({});

export default ImageDetail;
