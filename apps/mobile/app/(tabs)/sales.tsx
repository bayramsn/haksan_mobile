import { View } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle, Body } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';

export default function SalesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <ScreenTitle style={{ marginBottom: 16 }}>Satış</ScreenTitle>
      <Card style={{ marginBottom: 8 }}><Link href="/sales/companies"><Body>Firmalar</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/sales/contacts"><Body>Kontaklar</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/sales/cards"><Body>Satış Kartları</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/sales/offers"><Body>Teklifler</Body></Link></Card>
      <Card><Link href="/sales/documents"><Body>Dokümanlar</Body></Link></Card>
    </View>
  );
}
