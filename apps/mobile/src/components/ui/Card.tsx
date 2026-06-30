import { View, ViewProps } from 'react-native';
import { colors, radius } from '../../theme/tokens';

export const Card = (props: ViewProps) => <View style={[{ backgroundColor: colors.card, borderRadius: radius.card, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }, props.style]} {...props} />;
