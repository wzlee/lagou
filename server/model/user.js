'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    userid:{
        type:String,
        unique:true
    },
    password: String,
    email: String,
    status: String,
    baseinfo:{
        fullname:String,
        sex:String,
        degree:String,
        worktime:Number,
        phone:String,
        email:String,
        workstatus:String
    },
    workexpect:{
        place:String,
        type:String,
        post:String,
        pay:String
    },
    workexperience:[{
        companyname:String,
        post:String,
        beginyear:String,
        beginmonth:String,
        endyear:String,
        endmonth:String
    }],
    projectexperience:[{
        projectname:String,
        post:String,
        beginyear:String,
        beginmonth:String,
        endyear:String,
        endmonth:String,
        description:String
    }],
    eduexperience:[{
        eduname:String,
        degree:String,
        major:String,
        beginyear:String,
        endyear:String
    }],
    selfdesc:String,
    worksshow:[{
        url:String,
        description:String
    }]
});

mongoose.model('User', UserSchema);
