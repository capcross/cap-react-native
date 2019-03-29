import React from 'react';
import { string, number } from 'prop-types';
import { Dimensions } from 'react-native';
import { Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import log from '@cap-cross/cap-core';

export default class EmptyView extends React.Component {
  static propTypes = {
    iconColor: string.isRequired,
    //        iconName: string.isRequired,
    text: string.isRequired,
    size: number.isRequired,
  };

  static defaultProps = {
    iconColor: '#E91E63',
    color: '#424242',
    size: 60,
  };

  getStyles = props => ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Dimensions.get('window').height / 2 - 100, // eslint-disable-line no-mixed-operators
    },
    text: {
      color: props.color,
    },
  });

  render() {
    log.trace('EpmtyView.render...');

    const styles = this.getStyles(this.props);

    return (
      <View style={styles.container}>
        <Icon name={'assignment'} size={this.props.size} color={this.props.iconColor} />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
