const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool({connectionString : process.env.DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/tokengql" })
                                        // postgresql://username:password@host:port/dbname[?paramspec]
 const fetchdata = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null )         
        return rows        
    }finally {
        client.release()
    }
}

module.exports = { fetchdata }