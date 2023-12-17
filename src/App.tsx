import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {colors} from './utils';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Gluco Tracker App</Text>
      <FontistoIcon
        name="blood-drop"
        size={20}
        color={colors.red}
        style={{marginRight: 4}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
});

export default App;
