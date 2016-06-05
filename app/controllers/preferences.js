module.exports = {
    list: function(req, res) {
        req.models.userpref.find(function (err, userpref) {
            if (err) 
                res.send(404, err);
            res.status(200);
            res.json(userpref);
        }); 
    },
    create: function(req, res) {
        req.models.userpref.create(req.body, function (err, userpref) { 
            if (err)
                res.send(422, err);
            res.send(201, userpref.user_id); 
        }); 
    },
    update: function(req, res) {
        req.models.userpref.get(req.params.user_id, function (err, userpref) {
            userpref.save(req.body, function (err) {
                if (err)
                    res.send(422, err);
            });
            if (err)
                res.send(422, err);
            res.send(200, req.params.user_id); 
        }); 
    },
    get: function(req, res) {
        req.models.userpref.get(req.params.user_id, function (err, userpref) {
            if (err)
                res.send(404, err);
            res.status(200);
            res.json(userpref);
        });
    }
};