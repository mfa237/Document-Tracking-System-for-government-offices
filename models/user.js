var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema(
  {
    name: {type: String, required: true, max: 50},
    username:{type: String, required: true, unique: true, max: 30},
    password:{type: String, required: true, max: 30},
    authorities:[{type: Schema.ObjectId, ref: 'Authority'}],
    mobileNo:{type: Number},
    superadmin:{type: Boolean, default: false},
    inward:{type:Boolean,default:false}
  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);
