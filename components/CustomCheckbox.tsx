import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { CheckBox } from '@rneui/themed';

interface Props {
  optionChoices: any;
}

export const CustomCheckbox: React.FC<Props> = ({ optionChoices }) => {
  return (
    <>
      <Text style={styles.title}>Your Responses:</Text>
      {optionChoices
        .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
        .map((optionChoice: any) => (
          <>
            <CheckBox
              checked={optionChoice.isSelected}
              // Use ThemeProvider to make change for all checkbox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="red"
              title={optionChoice.text}
            />
            {optionChoice.isOther && optionChoice.isSelected && (
              <TextInput
                value={optionChoice.otherText}
                style={styles.input}
                editable={false}
                multiline
              />
            )}
          </>
        ))}
    </>
  );
};

// Later on in your styles..
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  input: {
    minHeight: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 50,
  },
});
