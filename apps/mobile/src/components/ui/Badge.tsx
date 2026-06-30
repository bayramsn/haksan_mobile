import { View, Text } from 'react-native';
import { colors } from '../../theme/tokens';

type Status = 'primary' | 'destructive';

export const Badge = ({ status, label }: { status: Status, label: string }) => {
  const bg = status === 'primary' ? colors.primarySoft : colors.redSoft;
  const color = status === 'primary' ? colors.primary : colors.accentRed;

  return (
    <View style={{ backgroundColor: bg, borderColor: color, borderWidth: 1, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 }}>
      <Text style={{ color, fontSize: 12, fontWeight: '500' }}>{label}</Text>
    </View>
  );
};
