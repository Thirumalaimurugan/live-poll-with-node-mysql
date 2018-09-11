module.exports = function(io, pollModel) {
    var admin = io.of('/admin');
    var user = io.of('/user');

    var returnResult = function(error, result, fields, cb) {
        console.log(typeof cb, 'in returnResult');
        if (typeof cb === 'function') {
            cb(error, result, fields);
        } else {
            console.log('Not a call back function');
        }

    }

    var sendPollToClient = function(error, results, fields) {
        console.log(results);
        if (!error) {
            admin.emit("pollingData", JSON.stringify(results));
        } else {
            console.log(error);
        }
    }

    var getResult = function(id, cb) {
        console.log(typeof cb, 'in getResult');
        pollModel.getPollResult(id, function(err, results, fields) {
            returnResult(err, results, fields, cb);
        });
    }

    var insertPoll = function(questionID, answerID, cb) {
        pollModel.insertPoll(questionID, answerID, function(err, results, fields) {
            if (results) {
                getResult(questionID, function(err, results, fields) {
                    sendPollToClient(err, results, fields);
                })
            }
            returnResult(err, results, fields, cb);
        });
    }


    admin.on('connection', function(socket) {
        socket.on('getData', function(questionID) {
            console.log('getData called');
            console.log(typeof sendPollToClient);
            pollModel.getPollResult(questionID, sendPollToClient);
        });
    });

    user.on('connection', function(socket) {
        console.log('userConnected');
    });

    return { getResult, insertPoll }
}