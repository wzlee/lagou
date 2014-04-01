'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
    companyid:{
        type:String,
        unique:true
    },
    name:String,
    nickname:String,
    place:String,
    description:String,
    intro:String,
    tags:[{
        id:String,
        name:String
    }],
    product:{
        name:String,
        description:String,
        imgurl:String
    }
    logo:String,
    homeurl:String
});

mongoose.model('Company',CompanySchema);
