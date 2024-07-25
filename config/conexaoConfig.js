const mysql2 = require("mysql2/promise");



const conectar = async () =>{
     return await mysql2.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        port:process.env.PORT_SQL

    });
}


const executar = async (sql,params) =>{
    const database = await conectar();
    let [result] = await database.query(sql,params);
    await database.end();
    return result;
}


module.exports = {
    conectar,
    executar
}



