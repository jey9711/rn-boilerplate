import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {SpinnerOverlay} from '../../../components';
import commonStyles from '../../../styles/common';
import {t} from '../../../i18n';
import dictionary from '../dictionary';

export default class Login extends Component {
  static propTypes = {
    form: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    isLoggingIn: PropTypes.bool.isRequired,
    changeFormValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <SpinnerOverlay show={this.props.isLoggingIn} />

        <View>
          <TextInput
            style={styles.input}
            value={this.props.form.username}
            onChangeText={(username) => this.props.changeFormValue('username', username)}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={true}
            keyboardType={'email-address'}
            placeholder={t(dictionary.email)}/>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={this.props.form.password}
            onChangeText={(password) => this.props.changeFormValue('password', password)}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={false}
            keyboardType={'default'}
            placeholder={t(dictionary.password)}/>
        </View>
        <View>
          <Button
            style={styles.input}
            onPress={() => this.props.login(this.props.form.username, this.props.form.password)}
            disabled={this.props.isLoggingIn || !this.props.form.username || !this.props.form.password}
            title={t(dictionary.login)}
            accessibilityLabel={t(dictionary.login)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 400,
  }
});