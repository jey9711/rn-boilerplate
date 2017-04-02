import {combineReducers} from 'redux';
import loginScene from '../scenes/Login/loginReducer';
import homeScene from '../scenes/Home/homeReducer';
import auth from '../modules/auth/authReducer';
import app from '../modules/app/appReducer';
import me from '../modules/me/meReducer';
import navigation from '../modules/navigation/navigationReducer';

export default combineReducers({
  auth,
  app,
  me,
  navigation,
  loginScene,
  homeScene,
});
