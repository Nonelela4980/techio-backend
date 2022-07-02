const {WHITE_LIST} = require('../constants/configs')
        
const corsAccess={
    origin:(origin,callback)=>{
        if(WHITE_LIST.indexOf(origin)!==-1 || !origin)
        callback(null,true);
        else 
            callback(new Error(`Cors prevented access for origin ${origin}`))
    },
    optionsSuccessStatus:200
}

module.exports =corsAccess;