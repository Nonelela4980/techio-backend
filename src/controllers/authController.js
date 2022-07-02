const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user')

const checkExistingUser = async (email) =>{
    const user=  await User.findOne({'email':`${email}`},function(err,cur_user){
        if(err)
            return HandleError(err)    
    }).clone().catch(function(error){
        console.log(error);
    });
    if(user)
        return true
    else
        return false

        
}

const register = async (req,res)=>{


    const {firstname,lastname,email,password} = req.body
    
    console.log('exiost',await checkExistingUser(email))
    if(await checkExistingUser(email))
        return res.status(401).json({'message':'email address already exists'})

    try{
        const userId = uuidv4()
        const hashPassword =await bcrypt.hash(password,10)

        await User.create(
            {
            'id':userId,
            'firstname':firstname,
            'lastname':lastname,
            'email': email,
            'password':hashPassword,
            }
        )

        res.status(200).json(
            {
                'id':userId,
                'firstname':firstname,
                'lastname':lastname,
                'email': email,
            }
        )      
    }
    catch(error){
        res.status(400).json({
            'message' : 'failed to register',
            'status' : 'failed'
        })
        console.log(error)
    }
}



const signIn = async (req,res) => {
    const {email,password} = req.body

    if(!checkExistingUser(email)) 
        return res.status(403).json({'message':'account does not exist'})

    const user=  await User.findOne({'email':`${email}`},function(err,cur_user){
        if(err)
            return HandleError(err)    
    }).clone().catch(function(error){
        console.log(error);
    });

    const match = await bcrypt.compare(password,user.password)

    if(match){
        return res.status(200).json(
            {
                'id':user.id,
                'firstname':user.firstname,
                'lastname': user.lastname,
                'email':user.email
            }
        )
    }
    else
        return res.status(401).json({'message': 'incorrect email or password'})
}



module.exports = {register,signIn}