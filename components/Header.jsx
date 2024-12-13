import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Header({}) {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Header;
