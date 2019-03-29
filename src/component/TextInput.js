import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input } from 'native-base';

export default class TextInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
  };

  render() {
    const { input, meta, ...inputProps } = this.props;

    // TODO multiline, numberOfLines введены только для работы в Expo (проверить)
    // На Android при этом приходится вертикально скроллить, если содержимое не вмещается в
    // отведённое число строк. На iPhone всё нормально - отображается всё содержимое.
    // Это искажает отображение пустых форм - поля располагаются слишком близко - исправить для Expo
    return (
      <InputGroup>
        <Input
          multiline
          numberOfLines={3}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          {...inputProps}
        />
      </InputGroup>
    );
  }
}
