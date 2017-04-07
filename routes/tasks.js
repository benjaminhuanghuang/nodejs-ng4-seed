var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb://ben:ben123@ds155490.mlab.com:55490/mytasklist", ['tasks']);

// "GET" request /api/tasks
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    })
});

// "GET" request /api/tasks/id
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    })
});

// "POST" request to save  
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function (error, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

// "DELETE" request to delete
router.delete('/task/:id', function (req, res, next) {
    db.tasks.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    })
});

// "PUT" request to update
router.put('/task/:id', function (req, res, next) {
    var task = req.body;

    if (!task) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } 
    else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, task, {}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
        })
    }
});

module.exports = router;