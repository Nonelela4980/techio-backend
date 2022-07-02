require('dotenv').config()
WHITE_LIST = ["http://localhost:3000"]
MONGO_URI  = process.env.MONGO_URI

module.exports =
{
    WHITE_LIST,
    MONGO_URI
}