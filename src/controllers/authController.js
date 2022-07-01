const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const {User} = require('../models/user')


const checkExistingUser = async (email) =>{
    const user=  await User.findOne({'email':`${email}`})

    if(user)
        return true
    else
        return false
}

const register = async (req,res)=>{
    const {firstname,lastname,email,password} = req.body

    if(checkExistingUser)
        return res.status(401).json({'message':'email address already exists'})

    try{
        const userId = uuiv4()
        const hashPassword = bcrypt.hash(password,10)

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
    }
}



const signIn = async (req,res) => {
    const {email,password} = req.body

    if(!checkExistingUser)
        return res.status(403).json({'message':'account does not exist'})

    const user=  await User.findOne({'email':`${email}`})

    const match = bcrypt.compare(password,user.password)

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