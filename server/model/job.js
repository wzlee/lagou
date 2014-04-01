'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
    jobid:{
        type:String,
        unique:true
    },
    name:String,
    place:String,
    pay:String,
    degree:String,
    type:String,
    advantage:String,
    description:String,
    publish:{
        type:Date,
        default:Date.now
    },
    companyid:String
});

mongoose.model('Job',JobSchema);
