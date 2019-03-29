import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import Util from '../../../util/Util';

export default function withBackButton() {
  return (ReactComponent) => {
    const mapStateToProps = state => ({
      index: state.navigate.index,
    });

    //@connect(mapStateToProps)
    class BackButtonComponent extends React.Component {
      static propTypes = {
        index: PropTypes.number.isRequired,
        navigation: PropTypes.object,
      };

      /* eslint-disable no-useless-constructor */
      constructor(props, context) {
        super(props, context);
      }

      componentDidMount() {
        /*  eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]  */
        Util.platformOS() === 'android' &&
          BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }

      componentWillUnmount() {
        Util.platformOS() === 'android' &&
          BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }

      handleBackPress = () => {
        if (this.props.index) {
          this.props.navigation.goBack();
          return true;
        }
        return false;
      };

      render() {
        return <ReactComponent {...this.context} {...this.props} />;
      }
    }

    //return BackButtonComponent;
    return connect(mapStateToProps)(BackButtonComponent);
  };
}
