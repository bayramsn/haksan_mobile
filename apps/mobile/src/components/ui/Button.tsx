import { TouchableOpacity, Text } from 'react-native';
import { colors, radius, spacing } from '../../theme/tokens';

export const Button = ({ title, variant = 'primary', onPress }: { title: string, variant?: 'primary' | 'destructive', onPress: () => void }) => {
  const bg = variant === 'destructive' ? colors.accentRed : colors.primary;

  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: bg, minHeight: spacing.touchTarget, borderRadius: radius.input, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
      <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
};
