import { View } from 'react-native';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';

export default function MoreScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <Card><ScreenTitle>Daha Fazla Tab</ScreenTitle></Card>
    </View>
  );
}
