import React from 'react';
import {Icon, ListItem} from '@rneui/themed';
import {Canopy} from '../types';
import {StyleSheet} from 'react-native';

interface CanopyItemProps {
  item: Canopy;
}
export const CanopyItem: React.FC<CanopyItemProps> = ({item}) => {
  const {title, status} = item;
  const isIncomplete = status === 'Incomplete';

  const statusText = isIncomplete ? 'Incomplete' : 'Complete';

  return (
    <ListItem containerStyle={styles().containerStyle}>
      <Icon name="tree-outline" type="material-community" color="orange" />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle style={styles({isIncomplete}).subtitle}>
          {statusText}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron iconStyle={styles().icon} />
    </ListItem>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    containerStyle: {borderBottomColor: 'grey', borderBottomWidth: 1},
    subtitle: {fontSize: 12, color: props?.isIncomplete ? 'red' : 'green'},
    icon: {color: 'orange'},
  });
