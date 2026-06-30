import { View, ScrollView } from 'react-native';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle, SectionTitle } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';
import { Input } from '../../src/components/ui/Input';
import { ListRow } from '../../src/components/ui/ListRow';
import { mockSales } from '../../src/data/mock';

export default function AnaScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.canvas }}>
      <View style={{ padding: 16 }}>
        <ScreenTitle style={{ marginBottom: 16 }}>Dashboard</ScreenTitle>
        <Input placeholder="Search..." />
        <Card style={{ marginTop: 16 }}>
          <SectionTitle style={{ marginBottom: 12 }}>Recent Activity</SectionTitle>
          {mockSales.map((item, i) => (
             <ListRow key={item.id} title={item.title} subtitle={item.subtitle} status={item.status} />
          ))}
        </Card>
      </View>
    </ScrollView>
  );
}
