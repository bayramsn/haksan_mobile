import { Tabs } from 'expo-router';
import { colors } from '../../src/theme/tokens';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen name="index" options={{ title: 'Ana' }} />
      <Tabs.Screen name="sales" options={{ title: 'Satış' }} />
      <Tabs.Screen name="operations" options={{ title: 'Operasyon' }} />
      <Tabs.Screen name="service" options={{ title: 'Servis' }} />
      <Tabs.Screen name="more" options={{ title: 'Daha Fazla' }} />
    </Tabs>
  );
}
