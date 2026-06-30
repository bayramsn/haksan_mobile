import { View } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle, Body } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';

export default function ServiceScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <ScreenTitle style={{ marginBottom: 16 }}>Servis Tab</ScreenTitle>
      <Card style={{ marginBottom: 16 }}>
        <Link href="/service/machines"><Body>Makineler</Body></Link>
      </Card>
      <Card>
        <Link href="/service/requests"><Body>Servis Talepleri</Body></Link>
      </Card>
    </View>
  );
}
