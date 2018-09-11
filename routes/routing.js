var afterResult = function(error, result, fields, res) {
    console.log('after result');
    console.log(error);
    if (!error) {
        res.send(result);
    } else {
        res.end(JSON.stringify(error));
    }
}

module.exports = function(router, path, public, pollController) {

    //Polling page
    router.get('/', function(req, res) {
        res.sendFile(path.join(public, '/views/index.html'));
    });

    //Admin page 
    router.get('/admin', function(req, res) {
        res.sendFile(path.join(public, '/views/admin.html'));
    });

    //Geting the data from database
    router.get('/getPollResult/:id', function(req, res) {
        pollController.getResult(req.params.id, function(err, results, fields) {
            afterResult(err, results, fields, res);
        });
    });
    //To store value to the database
    router.post('/sumbitPolling', function(req, res) {
        var data = req.body;
        if (data) {
            pollController.insertPoll(data.questionID, data.answerID, function(err, results, fields) {
                afterResult(err, results, fields, res);
            });
        }
    });
    //Handle 404
    router.use(function(req, res) {
        res.status(404).send('404: Page not Found');
    });

    // Handle 500
    router.use(function(error, req, res, next) {
        res.status(500).send('500: Internal Server Error');
    });

}