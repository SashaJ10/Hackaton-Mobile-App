import React from 'react';
import { Icon, ListItem } from '@rneui/themed';
import { Canopy } from '../types';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface QuestionItemProps {
  item: Canopy;
  navigation: any;
}

export const CanopyItem: React.FC<QuestionItemProps> = ({
  item,
  navigation,
}) => {
  const { title, status } = item;
  const isIncomplete = status === 'Incomplete';

  const statusText = isIncomplete ? 'Incomplete' : 'Complete';

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('QuestionDetails', { title, canopyId: item.id })
      }
    >
      <ListItem containerStyle={styles().containerStyle}>
        <Icon name="tree-outline" type="material-community" color="orange" />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle style={styles({ isIncomplete }).subtitle}>
            {statusText}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron iconStyle={styles().icon} />
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    containerStyle: {
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    },
    subtitle: { fontSize: 12, color: props?.isIncomplete ? 'red' : 'green' },
    icon: { color: 'orange', fontSize: 25 },
  });
