import { View } from 'react-native';
import { ScreenTitle, Body } from '../../src/components/ui/Typography';
import { Input } from '../../src/components/ui/Input';
import { Button } from '../../src/components/ui/Button';
import { colors } from '../../src/theme/tokens';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 20, justifyContent: 'center' }}>
      <ScreenTitle style={{ marginBottom: 8 }}>Haksan</ScreenTitle>
      <Body style={{ marginBottom: 32 }}>Lütfen giriş yapın</Body>
      <Input placeholder="E-posta" />
      <Input placeholder="Şifre" secureTextEntry />
      <Button title="Giriş Yap" onPress={() => router.replace('/(tabs)')} />
    </View>
  );
}
