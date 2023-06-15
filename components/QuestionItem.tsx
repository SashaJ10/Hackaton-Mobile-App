import {Badge, Button, Icon, ListItem, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CanopyQuestionResponse} from '../types';
import Layout from '../Layout';

interface QuestionItemProps {
  item: CanopyQuestionResponse;
  index: number;
  handleDialog: () => void;
}

const darkGrey = '#ccced9';

export const QuestionItem: React.FC<QuestionItemProps> = ({
  item,
  index,
  handleDialog,
}) => {
  const {text, type} = item;

  const leftComponent = () => (
    <Button
      containerStyle={styles.leftButtonContainer}
      type="clear"
      title={'Archive'}
      titleStyle={styles.titleLeftButton}
      buttonStyle={styles.button}
      icon={{
        name: 'archive-outline',
        type: 'material-community',
      }}
      onPress={handleDialog}
    />
  );

  const rightComponent = () => (
    <Button
      containerStyle={styles.rightButtonContainer}
      type="clear"
      title={'Delete'}
      titleStyle={styles.titleRightButton}
      buttonStyle={styles.button}
      icon={{name: 'delete-outline', color: 'white'}}
      onPress={handleDialog}
    />
  );

  return (
    <Layout title='Question Details'>
    <View>
      <ListItem.Swipeable
        leftWidth={80}
        rightWidth={90}
        leftContent={leftComponent}
        rightContent={rightComponent}>
        <Badge value={`${index + 1}`} status="success" />
        <ListItem.Content>
          <ListItem.Subtitle>{text}</ListItem.Subtitle>
          <View style={styles.typeContainer}>
            <Icon
              name="video"
              type="material-community"
              color={darkGrey}
              size={18}
              style={styles.typeIcon}
            />
            <Text style={styles.typeText}>{type}</Text>
          </View>
        </ListItem.Content>
        <ListItem.Chevron iconStyle={styles.listItemIcon} />
      </ListItem.Swipeable>
    </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  typeContainer: {flexDirection: 'row', marginTop: 5},
  typeText: {color: darkGrey, fontWeight: '600'},
  typeIcon: {marginRight: 5},
  listItemIcon: {color: 'green'},
  leftButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  rightButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 0,
  },
  titleRightButton: {color: 'white', fontSize: 14},
  titleLeftButton: {color: 'black', fontSize: 14},
});
