const whiteList = require('../constants/configs')

const corsAccess={
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1 || !origin)
        callback(null,true);
        else 
            callback(new Error(`Cors prevented access for origin ${origin}`))
    },
    optionsSuccessStatus:200
}
module.exports =corsAccess;