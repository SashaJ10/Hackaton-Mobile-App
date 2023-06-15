import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

const test1 = () => <Text>Loading...</Text>;
const test2 = () => <Text>Not found</Text>;

interface Props {
  url: string;
}

export const CustomVideo: React.FC<Props> = ({ url }) => {
  return (
    <Video
      controls
      source={{ uri: url }} // Can be a URL or a local file.
      onBuffer={test1} // Callback when remote video is buffering
      onError={test2} // Callback when video cannot be loaded
      style={styles.mediaPlayer}
      resizeMode="contain"
    />
  );
};

// Later on in your styles..
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
