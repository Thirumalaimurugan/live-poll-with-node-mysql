module.exports = function(connection) {

    var getPollResult = function(questionID, cb) {
        var returnResult = function(error, result, fields) {
            cb(error, result, fields);
        }
        var query = 'SELECT COUNT(qp.option_id) AS vote, qo.option_text FROM question_option AS qo LEFT JOIN poll AS qp  ON qo.question_id=' + questionID + ' AND qo.id = qp.option_id GROUP BY qo.option_text';
        connection.query(query, returnResult);
    }

    var insertPoll = function(questionID, optionID, cb) {
        var insertStatus = function(error, result, fields) {
            cb(error, result, fields);
        }
        connection.query('INSERT INTO poll(question_id,option_id) VALUES(?,?)', [questionID, optionID], insertStatus);
    }
    return { getPollResult, insertPoll }
}