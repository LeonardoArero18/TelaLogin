import { View, StyleSheet, ScrollView } from 'react-native';

import TitleLogin from './src/components/Login/TitleLogin';
import InputsLogin from './src/components/Login/InputsLogin';
import SubButtonLogin from './src/components/Login/SubButtonLogin';


export default function App() {
  return (
    <View style={styles.container}>
      <TitleLogin/>
      <InputsLogin/>
      <SubButtonLogin/>
    </View>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
