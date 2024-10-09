import styles from "./styles";
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [fromSelected, setFromSelected] = useState("Binary");
  const [toSelected, setToSelected] = useState("Decimal");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleInput = (number) => {
    setInputValue(number);
  };

  const handleConvertion = () => {
    setResultVisible(false);
    setError(false);
    switch (fromSelected) {
      case "Binary":
        if (/^[01]*$/.test(inputValue)) {
          switch (toSelected) {
            case "Decimal":
              setAnswer(parseInt(inputValue, 2));
              break;
            case "Hexadecimal":
              setAnswer(parseInt(inputValue, 2).toString(16).toUpperCase());
              break;
            case "Octal":
              setAnswer(parseInt(inputValue, 2).toString(8));
              break;
            default:
              setAnswer(inputValue);
          }
          setResultVisible(true);
        } else {
          setError(true);
        }
        break; // Added break statement

      case "Decimal":
        if (/^[0-9]*$/.test(inputValue)) {
          switch (toSelected) {
            case "Binary":
              setAnswer(parseInt(inputValue).toString(2));
              break;
            case "Hexadecimal":
              setAnswer(parseInt(inputValue).toString(16).toUpperCase());
              break;
            case "Octal":
              setAnswer(parseInt(inputValue).toString(8));
              break;
            default:
              setAnswer(inputValue);
          }
          setResultVisible(true);
        } else {
          setError(true);
        }
        break; // Added break statement

      case "Hexadecimal":
        if (/^[0-9a-fA-F]*$/.test(inputValue)) {
          switch (toSelected) {
            case "Binary":
              setAnswer(parseInt(inputValue, 16).toString(2));
              break;
            case "Decimal":
              setAnswer(parseInt(inputValue, 16));
              break;
            case "Octal":
              setAnswer(parseInt(inputValue, 16).toString(8));
              break;
            default:
              setAnswer(inputValue);
          }
          setResultVisible(true);
        } else {
          setError(true);
        }
        break; // Added break statement

      case "Octal":
        if (/^[0-7]*$/.test(inputValue)) {
          switch (toSelected) {
            case "Binary":
              setAnswer(parseInt(inputValue, 8).toString(2));
              break;
            case "Decimal":
              setAnswer(parseInt(inputValue, 8));
              break;
            case "Hexadecimal":
              setAnswer(parseInt(inputValue, 8).toString(16).toUpperCase());
              break;
            default:
              setAnswer(inputValue);
          }
          setResultVisible(true);
        } else {
          setError(true);
        }
        break; // Added break statement
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>NUMBER SYSTEM CONVERTER</Text>
      </View>
      <View style={styles.type}>
      <View style={styles.fromType}>
        <Picker
          selectedValue={fromSelected}
          style={styles.picker}
          onValueChange={(itemValue) => setFromSelected(itemValue)}
        >
          <Picker.Item label="Binary" value="Binary" />
          <Picker.Item label="Decimal" value="Decimal" />
          <Picker.Item label="Octal" value="Octal" />
          <Picker.Item label="Hexadecimal" value="Hexadecimal" />
        </Picker>
      </View>

      <Text style={styles.to}>To</Text>

      <View style={styles.toType}>
        <Picker
          selectedValue={toSelected}
          style={styles.picker}
          onValueChange={(itemValue) => setToSelected(itemValue)}
        >
          <Picker.Item label="Binary" value="Binary" />
          <Picker.Item label="Decimal" value="Decimal" />
          <Picker.Item label="Octal" value="Octal" />
          <Picker.Item label="Hexadecimal" value="Hexadecimal" />
        </Picker>
      </View>

      </View>

      <Text style={{fontSize:20}}>Enter the number</Text>
      <TextInput style={styles.input} onChangeText={handleInput} placeholder="Type your number" />
      <View>
        {error && <Text style={styles.error}>Invalid {fromSelected} number</Text>}
      </View>
      <Button style={styles.convert} title="CONVERT" onPress={handleConvertion} />
      <View style={styles.result}>
        {resultVisible && <Text style={styles.answer} >{answer}</Text>}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
