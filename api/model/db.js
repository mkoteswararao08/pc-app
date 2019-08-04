const {Pool} = require('pg');
var que = require('./query')


var pool = new Pool({
    user: "postgres", // user name to your postgre sql database
    host: "localhost", // ip address of server running postgre sql
    database: "pcusers", // use this database to querying context

    password: "sriram", // corresponding password


    port: 5432

  });


  exports.displayUser=(usersId,callback)=>{
      pool.query(que.sel,userId,(err,result)=>{
          if(err) throw err;
          callback(null,result)

      })
           
   }



   exports.storeUser=(users,callback)=>{
   
     console.log("bddddddddddddd->>>>. ", users);
     

         pool.query(que.ins,users,(err,result)=>{
            if(err) throw err;
          callback(null,result) 

         })
   }