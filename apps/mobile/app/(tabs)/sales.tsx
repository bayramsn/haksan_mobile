import { View, FlatList } from 'react-native';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle } from '../../src/components/ui/Typography';
import { ListRow } from '../../src/components/ui/ListRow';
import { mockSales } from '../../src/data/mock';

export default function SalesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <ScreenTitle style={{ marginBottom: 16 }}>Satış</ScreenTitle>
      <FlatList
        data={mockSales}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListRow title={item.title} subtitle={item.subtitle} status={item.status} />
        )}
      />
    </View>
  );
}
