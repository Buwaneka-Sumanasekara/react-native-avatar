import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {getAcronymText,getAvatarColor} from "../utils";

interface AvatarProps {
  size: number ,
  title:string,
  onPress?:() => void,
  titleStyle:object | any,
  source:any
}


const Avatar = (props: AvatarProps) => {
  const {
    size,
    title,
    onPress,
    titleStyle:passedTitleStyle,
    source
  } = props;

  
  const wrapperStyle:any={
      width:size,
      height:size,
      borderRadius:size,
      backgroundColor:getAvatarColor(title)
  }
  const imageWrapperStyle:any={
    width:size,
    height:size,
  }

  const titleStyle:any={
    ...passedTitleStyle,
    fontSize:(size*0.5),
  }

  const AvatarWrapperComponent:any=(onPress?TouchableOpacity:View);
  return (
    <AvatarWrapperComponent style={[styles.wrapperStyle,wrapperStyle]}>
      {!source && (
       <Text style={[styles.titleStyle,titleStyle]}>{getAcronymText(title)}</Text>
      )}
      {source && (
        <Image style={imageWrapperStyle} source={source}/>
      )} 
    </AvatarWrapperComponent>
  );
};



Avatar.propTypes = {
  title:PropTypes.string,
  size:PropTypes.number,
  onPress:PropTypes.func,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
    ),
  ]),
  titleStyle:PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
}

const styles = StyleSheet.create({
  wrapperStyle:{
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    overflow:'hidden'
  },
  titleStyle:{
    color:"white"
  }
})

export default Avatar;
