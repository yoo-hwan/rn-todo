import { KeyboardAvoidingView, View, Image } from 'react-native';
import Input from '../components/Input';

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView>
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
