import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius } from '../../theme/tokens';

export const Picker = ({ label, value, onPress }: { label: string; value?: string; onPress: () => void }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ color: colors.textPrimary, fontSize: 14, fontWeight: '500', marginBottom: 6 }}>{label}</Text>
      <TouchableOpacity onPress={onPress} style={{ borderWidth: 1, borderColor: colors.border, borderRadius: radius.input, paddingHorizontal: 12, minHeight: 44, justifyContent: 'center' }}>
        <Text style={{ color: value ? colors.textPrimary : colors.muted }}>{value || 'Seçiniz'}</Text>
      </TouchableOpacity>
    </View>
  );
};
