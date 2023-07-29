import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WHITE } from './color';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* <TestAvoid /> */}
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
