var mongoose = require('mongoose'),
    FormatDate = mongoose.Schema.Types.FormatDate = require('formatdate');
//var autoIncrement = require('mongodb-autoincrement');
var autoIncrement = require('mongoose-auto-increment');

var db = require("../db.js");
autoIncrement.initialize(db);

var Schema = mongoose.Schema;

var DocSchema = Schema(
  {
    inwardDate: {type: FormatDate, format: 'DD-MM-YYYY', default: Date.now},
    receivedFrom:{type: Schema.ObjectId, ref: 'Authority',required:true},
    letterId:{type: String, required: false, max: 50},
    letterDate: {type: FormatDate, format: 'DD-MM-YYYY', required: false},
    //ReceivingDate: {type: FormatDate, format: 'DD-MM-YYYY', required: true},
    subject: {type: String, required: true, max: 200},
    section:{type: Schema.ObjectId, ref: 'Authority',required:true},
    sectionDate:{type: FormatDate, format: 'DD-MM-YYYY', default: Date.now},
    comments:{type: String, required: false, max: 300},
    dispatchId:{type: String, required: false, max: 300},
    dispatchDate:{type: FormatDate, format: 'DD-MM-YYYY'},
    sentTo:[{type: Schema.ObjectId, ref: 'Authority'}],
    archiveFileId:[{type: Schema.ObjectId, ref: 'File'}],
    pendingWith:[{type: Schema.ObjectId, ref: 'Authority'}],
    dueDate: {type: FormatDate, format: 'DD-MM-YYYY', default: Date.now},
    priority:{type: String, enum: ['High', 'Normal'], default: 'Normal'},
    isDisposed:{type: Boolean, default: false},
    serial:{type:Number,default:0}
  }
);

// Virtual for document's URL
DocSchema
.virtual('url')
.get(function () {
  return '/docs/' + this._id;
});

//Updating the serial number of document before every save

// DocSchema.pre("save",function(next)
// {
//   var doc = this;
//   doc.set()
// })

// Applying auto-increment on serial field 
DocSchema.plugin(autoIncrement.plugin, {model:'Doc',field:'serial'});

//Export model
module.exports = mongoose.model('Doc', DocSchema);
