import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';

import Video from 'react-native-video';

const {height} = Dimensions.get('window');

const videoResponse =
  'https://ciq-dev.s3.amazonaws.com/Clients/fff31752-da0f-4b4d-970e-a27fc5536cba/Projects/9f3ec052-9b8b-416b-b48e-d3c9408e9ae8/Uploads/Canopies/d95e17d4-aac4-46eb-b50a-36785c6a94b5/Questions/61d563fc-dd99-4a43-b049-ca5017925f57/Answers/xd0nrtv1_Converted.mp4?AWSAccessKeyId=AKIAVNVAFULXV4FTEMVY&Expires=1687362496&Signature=Nb6FdR8rODP%2BudENVd1OAljAW3Y%3D';

const test1 = () => <Text>Loading...</Text>;
const test2 = () => <Text>Not found</Text>;

export const CustomVideo: React.FC = () => {
  return (
    <>
      <Video
        controls
        source={{uri: videoResponse}} // Can be a URL or a local file.
        ref={ref => {
          console.log('🚀 ~ ref:', ref);
        }} // Store reference
        onBuffer={test1} // Callback when remote video is buffering
        onError={test2} // Callback when video cannot be loaded
        style={styles.mediaPlayer}
      />
    </>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
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
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});
