/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect}  from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Pressable,
  Image,
  Button,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


let App: () => Node = () => {
  let [username,setUsername] = useState("")
  let [password,setPassword] = useState("")
  let [newAccount,createNewAccount] = useState(false)
  let [google,authenticateWithGoogle] = useState(false)
  let [verification,startVerification] = useState(false)
  return (
    <SafeAreaView>
        <Image source={{uri:"https://trashymedia.s3.us-east-2.amazonaws.com/assets/blam.svg"}}/>
        <TextInput  onChangeText={setUsername}/>
        <TextInput secureTextEntry={true} onChangeText={setPassword}/>
        <Button title='Login' onPress={startVerification} style={styles.loginButton}/>
        <View>
            <Pressable onPress={authenticateWithGoogle}>
                <Image source={{uri:"https://trashymedia.s3.us-east-2.amazonaws.com/assets/Google.svg"}}/>
            </Pressable>
            <Pressable onPress={authenticateWithGoogle}>
                <Image source={{uri:"https://trashymedia.s3.us-east-2.amazonaws.com/assets/Facebook.svg"}}/>
            </Pressable>
        </View>
        <Pressable onPress={createNewAccount}>
            <Text>create account</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
