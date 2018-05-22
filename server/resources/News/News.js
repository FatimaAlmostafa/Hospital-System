var mongoose = require('mongoose');



var NewsSchema=mongoose.Schema({
	Text:{type:String},
	Image:{type:String},
	createdAt:{
		type:Date,
		default:Date.now
	}
})
var News=mongoose.model('News',NewsSchema)
module.exports=News