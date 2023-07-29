import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require('../../assets/main.png')} style={styles.image} />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'이메일'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          iconName={IconNames.EMAIL}
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'패스워드'}
          placeholder={'password'}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          iconName={IconNames.PASSWORD}
        />
      </View>
    </SafeInputView>
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
