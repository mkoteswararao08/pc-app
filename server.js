var express = require ('express');
var app = express();
var path = require('path');
var cors =require('cors');

var userRouter = require('./api/router/userRoute')



app.use(cors({credentials: true, origin: 'http://localhost:4200'}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/pc-app')));
app.set('port', process.env.PORT || 4300);


app.use('/', express.static(path.join(__dirname, 'dist/pc-app')));
app.use('/api', userRouter);











app.listen(app.get('port'), function(){
    // console.log('Express server listening on port ' + app.get('port'));
    console.log(`Express server listening on port ${app.get('port')} `);
  });