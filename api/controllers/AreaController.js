/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		pos=req.param('pos');
		title=req.param('title');

		Area.create({pos:pos, title:title}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:1});
			});

  	},

  	index: function(req,res){
  		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		Area.find({}).exec(function(err, records){
			res.json(records);
			})
		}


  	}
