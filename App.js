import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CastButton, useRemoteMediaClient } from 'react-native-google-cast'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyComponent/>
      <StatusBar style="auto" />
    </View>
  );
}
function MyComponent() {
  // This will automatically rerender when client is connected to a device
  // (after pressing the button that's rendered below)
  const client = useRemoteMediaClient()

  if (client) {
    // Send the media to your Cast device as soon as we connect to a device
    // (though you'll probably want to call this later once user clicks on a video or something)
    client.loadMedia({
      mediaInfo: {
        contentUrl:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
      },
    })
  }

  // This will render native Cast button.
  // When a user presses it, a Cast dialog will prompt them to select a Cast device to connect to.
  return <CastButton style={{ width: 24, height: 24, tintColor: 'black' }} />
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
