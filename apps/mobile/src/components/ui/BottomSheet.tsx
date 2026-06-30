import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors, radius } from '../../theme/tokens';

export const BottomSheet = ({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: React.ReactNode }) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.sheet}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: colors.card, borderTopLeftRadius: radius.sheet, borderTopRightRadius: radius.sheet, padding: 20, minHeight: 200 }
});
