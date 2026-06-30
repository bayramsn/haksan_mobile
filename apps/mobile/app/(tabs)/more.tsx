import { View } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle, Body } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';

export default function MoreScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <ScreenTitle style={{ marginBottom: 16 }}>Daha Fazla / Yönetim</ScreenTitle>
      <Card style={{ marginBottom: 8 }}><Link href="/admin/users"><Body>Kullanıcılar</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/admin/roles"><Body>Roller</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/admin/departments"><Body>Departmanlar</Body></Link></Card>
      <Card><Link href="/admin/settings"><Body>Ayarlar</Body></Link></Card>
    </View>
  );
}
