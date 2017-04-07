# Create database on mLab
    - Create database
    - Create user
    - Create collection
    - Create document

# Using mongojs
    var mongojs = require('mongojs');
    var db = mongojs("mongodb://<dbuser>:<dbpassword>@dsxxx.mlab.com:55490/mytasklist"); 

    // find all
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    })

    // find one
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })