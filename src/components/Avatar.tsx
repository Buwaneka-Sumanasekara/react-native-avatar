import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {getAcronymText} from "../utils";

interface AvatarProps {
  size: number|string ,
  title:string,
  onPress?:() => void
}


const Avatar = (props: AvatarProps) => {
  const {
    size,
    title,
    onPress
  } = props;

  const wrapperStyle:any={
      width:size,
      height:size,
      borderRadius:size
  }

  const AvatarWrapperComponent:any=(onPress?TouchableOpacity:View);
  return (
    <AvatarWrapperComponent style={[styles.wrapperStyle,wrapperStyle]}>
      <Text>{getAcronymText(title)}</Text>
    </AvatarWrapperComponent>
  );
};

const styles = StyleSheet.create({
  wrapperStyle:{
    backgroundColor:"red",
    
  }
})

export default Avatar;
