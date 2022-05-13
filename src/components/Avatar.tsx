import React from 'react';
import { ActivityIndicator, Button, View, StyleSheet } from 'react-native';

interface AvatarProps {
  loading?: boolean;
}

const Avatar = (props: AvatarProps) => {
  const {
    loading,
  } = props;

  return (
    <View style={styles.wrapperStyle}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle:{
    backgroundColor:"red"
  }
})

export default Avatar;
