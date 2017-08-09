import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

const ListItem = ({ employeeName, onPress }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {employeeName}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
