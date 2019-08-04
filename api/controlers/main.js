var dbs = require('../model/db')

exports.users = (req, resp) => {

    var userId = req.body.id;
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userimgUrl = req.body.imgUrl;
    var data = [userId, userName, userEmail, userimgUrl]
    console.log(data, req.body.id);

    dbs.storeUser(data, (err, result) => {
        if (err) throw err;
        if (result.rowCount === 1) {
            console.log("user data inserted succesfully=----->>>>>>>>>>>>>>>>");

            resp.end();
        }
    })


}