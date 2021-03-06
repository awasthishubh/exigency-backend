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

  		name=req.param('name');
		phno=req.param('phno');
		email=req.param('email');
		items=req.param('items');
		sid=req.param('sid');
		spos=req.param('spos');
		dtitle=req.param('dtitle');
		dpos=req.param('dpos');
		team=req.param('team');
		id=req.param('id');

		if(id==null)
		Mem.create({name:name, phno:phno, email:email, items:items, sid:sid, spos:spos, dtitle:dtitle, dpos:dpos, team:team}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:2});
			});
		else
		Mem.create({name:name, phno:phno, email:email, items:items, sid:sid, spos:spos, dtitle:dtitle, dpos:dpos, team:team,id:id}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:1,id:id});
			});
  	},


  	index: function(req,res){
  		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		Mem.find({}).exec(function(err, records){
			res.json(records);
			})
		},
	find: function(req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		id=req.param('id');

  		Mem.find({sid:id}).exec(function(err, records){
			res.json(records);
			})
		},

	delete: function(req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		id=req.param('id');
		Mem.destroy({'id':id}).exec(function (err,data) {
			if(err) return res.serverError(err);
			if(data.length==0) res.json({msg: "Invalid reg",status:0, data:{}});
			else res.json({data:data, status:1});
		});
	}
}





//   		items=req.param('items');
//   		team=req.param('team');
//   		id=req.param('id');

//   // 		Mem.update({id:id}).set({items:items,team:team});

//   // 		Mem.update({id:id})
// 		// .set({items:items,team:team});

// 		// Mem.update({id:id}, {items:items,team:team});

// 		// return res.json({items, id, team});

//   		Mem.find({'id':id}).exec(function(err, records){
//   			records.items=items;
//   			records.team=team;
//   			Mem.destroy({id:records.id});  			
// 			Mem.create(records);
// 			res.json(records.sid);
// 			})

// 		// 	id=req.param('id');
// 		// 	Mem.destroy({'id':id}).exec(function (err,data) {
// 		// 	if(err) return res.serverError(err);
// 		// 	if(data.length==0) res.json({msg: "Invalid reg",status:0, data:{}});
// 		// 	else res.json({data:data, status:1});
// 		// });
// 		}
// 	// fnd2: function(req,res) {
// 	// 	res.header("Access-Control-Allow-Origin", "*");
//  //  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

//  //  		id=req.param('id');

//  //  		Mem.find({id:id}).exec(function(err, records){
// 	// 		res.json(records);
// 	// 		})
// 	// 	}
	

// }
