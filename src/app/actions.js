import config from './config.js';
import axios from 'axios';
import user from './actions/user.js';

// root actions export
// use with store.dispatch()
// ex:
//      import actions from './actions';
//      store.dispatch(actions.foo());
//
module.exports = {
    user,
};
