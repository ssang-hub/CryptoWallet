import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const windowWidth = Dimensions.get('window').width;

export default function ScanQRCode({ setShowScanQRCode, showScanQRCode, handleScanResult }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    handleScanResult(data);
    setShowScanQRCode(false);
  };

  if (hasPermission === null) {
    return (
      <View style={{ alignContent: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
        <ActivityIndicator size="large" style={{ zIndex: 2, marginTop: 200 }} />
      </View>
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scanStyle} />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: windowWidth,
  },
});
