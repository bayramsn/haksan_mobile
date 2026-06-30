import { View } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../../src/theme/tokens';
import { ScreenTitle, Body } from '../../src/components/ui/Typography';
import { Card } from '../../src/components/ui/Card';

export default function OperationsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.canvas, padding: 16 }}>
      <ScreenTitle style={{ marginBottom: 16 }}>Operasyon Tab</ScreenTitle>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/products"><Body>Ürünler</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/stock"><Body>Stok</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/purchasing"><Body>Satın Alma</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/shipping"><Body>Sevkiyat</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/delivery"><Body>Teslimat</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/operations/installation"><Body>Kurulum</Body></Link></Card>
      <ScreenTitle style={{ marginVertical: 16 }}>Finans</ScreenTitle>
      <Card style={{ marginBottom: 8 }}><Link href="/finance/payments"><Body>Ödemeler/Kasa</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/finance/invoices"><Body>Faturalar</Body></Link></Card>
      <Card style={{ marginBottom: 8 }}><Link href="/finance/reports"><Body>Cari Rapor</Body></Link></Card>
      <Card><Link href="/finance/calendar"><Body>Vade Takvimi</Body></Link></Card>
    </View>
  );
}
