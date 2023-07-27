import { KeyboardAvoidingView, View, Image, Platform } from 'react-native';
import Input from '../components/Input';

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView style={[(flex: 1)]}
    behavior={Platform.select([ios:'padding'])}>
      <View>
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View>
        <Input
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
