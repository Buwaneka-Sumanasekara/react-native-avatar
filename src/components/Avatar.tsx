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
    <View style={styles.container}>
      <Button
        title="Loading Button"
        disabled={loading}
        onPress={() => { }} />
      {loading && (
        <ActivityIndicator
          style={styles.indicator}
          animating
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  indicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  }
})

export default Avatar;
