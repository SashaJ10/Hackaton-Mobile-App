import {Badge, Button, Icon, ListItem, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CanopyQuestionResponse} from '../types';

interface QuestionItemProps {
  item: CanopyQuestionResponse;
  index: number;
}

const darkGrey = '#ccced9';

const leftComponent = (action: any) => (
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
    onPress={action}
  />
);

const rightComponent = (action: any) => (
  <Button
    containerStyle={styles.rightButtonContainer}
    type="clear"
    title={'Delete'}
    titleStyle={styles.titleRightButton}
    buttonStyle={styles.button}
    icon={{name: 'delete-outline', color: 'white'}}
    onPress={action}
  />
);

export const QuestionItem: React.FC<QuestionItemProps> = ({item, index}) => {
  const {text, type} = item;
  return (
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
  button: {flexDirection: 'column'},
  titleRightButton: {color: 'white', fontSize: 14},
  titleLeftButton: {color: 'black', fontSize: 14},
});
