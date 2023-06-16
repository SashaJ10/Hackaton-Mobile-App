import { Badge, Button, Divider, Icon, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { CanopyQuestionResponse } from '../types';

interface QuestionItemProps {
  item: CanopyQuestionResponse;
  index: number;
  handleDialog: () => void;
  navigation: any;
  isAnswered: boolean;
}

const darkGrey = '#ccced9';

export const QuestionItem: React.FC<QuestionItemProps> = ({
  item,
  index,
  handleDialog,
  navigation,
  isAnswered,
}) => {
  const { text, type } = item;
  const isVideo = type === 'Video';

  const rightComponent = () => (
    <Button
      containerStyle={styles.rightButtonContainer}
      type="clear"
      title={isVideo ? 'Record' : 'Try Again'}
      titleStyle={styles.titleRightButton}
      buttonStyle={styles.button}
      icon={{
        name: isVideo ? 'video' : 'chat-question-outline',
        color: 'white',
        type: 'material-community',
      }}
      onPress={handleDialog}
    />
  );

  return (
    <>
      <ListItem.Swipeable
        leftWidth={80}
        rightWidth={90}
        rightContent={!isAnswered && rightComponent}
        containerStyle={styles.wrapper}
      >
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate('Answer', { type, questionId: item.id })
          }
          disabled={!isAnswered}
        >
          <Badge
            value={`${index + 1}`}
            status={isAnswered ? 'success' : 'error'}
          />
          <ListItem.Content>
            <ListItem.Subtitle>{text}</ListItem.Subtitle>
            <View style={styles.typeContainer}>
              <Icon
                name={isVideo ? 'video' : 'sort-variant'}
                type="material-community"
                color={darkGrey}
                size={18}
                style={styles.typeIcon}
              />
              <Text style={styles.typeText}>{type}</Text>
            </View>
          </ListItem.Content>
          {isAnswered && <ListItem.Chevron iconStyle={styles.listItemIcon} />}
        </TouchableOpacity>
      </ListItem.Swipeable>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wrapper: {
    paddingBottom: 10,
  },
  typeContainer: { flexDirection: 'row', marginTop: 5 },
  typeText: { color: darkGrey, fontWeight: '600' },
  typeIcon: { marginRight: 5 },
  listItemIcon: { color: '#52c41a', fontSize: 25 },
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
    marginBottom: 10,
  },
  titleRightButton: { color: 'white', fontSize: 14 },
  titleLeftButton: { color: 'black', fontSize: 14 },
});
