const sel = "select * from pcUsers WHERE id = $1";
const ins = "INSERT INTO pcUsers (id,name,email,imgurl) values ($1, $2, $3, $4)";
module.exports={sel,ins}