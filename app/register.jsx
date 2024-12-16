// import { StatusBar } from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Linking,
// } from 'react-native';

// import Button from '../components/Button.jsx';
// import Input from '../components/Input.jsx';
// import { Link } from 'expo-router';

// export default function Register() {
//   return (
//     <View style={styles.container}>
//       <Text>Nyoba Routes</Text>
//       <Image source={require('../assets/Vector.png')} style={styles.logo} />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#aaa"
//         secureTextEntry={true}
//       />
//       <Link href="/home">Ke Home</Link>
//       <Button text="Register" bgColor="#19918F" />
//       <Input text="Notes" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   logo: {
//     // width: 100,
//     // height: 100,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 15,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#f9f9f9',
//     fontSize: 16,
//   },
// });

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
  Pressable,
} from 'react-native';

import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { Link } from 'expo-router';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Vector.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Avatar URL"
        placeholderTextColor="#aaa"
      />
      {/* <Link href="/home">Ke Home</Link> */}

      <View style={styles.tnc}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#19918F' : undefined}
        />
        <Text style={styles.paragraph}>
          I have read and agree to the{' '}
          <Link href="/Tnc" style={styles.link}>
            Terms and Conditions
          </Link>
        </Text>
      </View>

      <Button text="Register" bgColor="#19918F" />
      <Text>
        Have account?{' '}
        <Link href="/" style={styles.link}>
          Login
        </Link>
      </Text>
      {/* <Input text="Notes" /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  link: {
    color: '#19918F',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  tnc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#19918F',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
  },
});
