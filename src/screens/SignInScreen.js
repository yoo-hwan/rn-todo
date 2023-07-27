import { StyleSheet, View, Image } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main.png')} style={styles.image} />
      <Input
        title={'email'}
        placeholder={'your@email.com'}
        keyboardType={KeyboardTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
      />
      <Input
        title={'password'}
        placeholder={'password'}
        returnKeyType={ReturnKeyTypes.DONE}
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
