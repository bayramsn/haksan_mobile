import { Text, TextProps } from 'react-native';
import { colors, typography } from '../../theme/tokens';

export const ScreenTitle = (props: TextProps) => <Text style={[{ color: colors.textPrimary }, typography.screenTitle, props.style]} {...props} />;
export const SectionTitle = (props: TextProps) => <Text style={[{ color: colors.textPrimary }, typography.sectionTitle, props.style]} {...props} />;
export const Body = (props: TextProps) => <Text style={[{ color: colors.textPrimary }, typography.body, props.style]} {...props} />;
export const Meta = (props: TextProps) => <Text style={[{ color: colors.muted }, typography.meta, props.style]} {...props} />;
export const KPI = (props: TextProps) => <Text style={[{ color: colors.textPrimary }, typography.kpi, props.style]} {...props} />;
