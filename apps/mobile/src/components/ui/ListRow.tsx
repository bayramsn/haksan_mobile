import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/tokens';
import { Badge } from './Badge';

interface ListRowProps {
  title: string;
  subtitle?: string;
  status?: { label: string; type: 'primary' | 'destructive' };
  onPress?: () => void;
  icon?: React.ReactNode;
}

export const ListRow = ({ title, subtitle, status, onPress, icon }: ListRowProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle && <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>}
      </View>
      <View style={styles.rightContainer}>
        {status && <Badge label={status.label} status={status.type} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  iconContainer: {
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  rightContainer: {
    marginLeft: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
