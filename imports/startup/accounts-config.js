/**
 * Created by ShinokiRyosei on 2016/04/12.
 */

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
   passwordSignupFields: 'USERNAME_ONLY'
});
