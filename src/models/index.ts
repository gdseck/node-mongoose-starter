import mongoose from 'mongoose';

import UserSchema from './UserSchema';

export default {
  User: mongoose.model('User', UserSchema, 'User'),
};
