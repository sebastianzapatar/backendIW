import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcript.handle";
import { singToken } from "../utils/jwt.handle";
const registerUserService=async(authUser:User)=>{
    const {email,password,description,name}=authUser
    console.log(password);
    const exist=await UserModel.findOne({email});
    if(exist){
        return "Already exist";
    }
    const passwordEncrypt=await encrypt(password);
    const newUser=await UserModel.create({email,password:passwordEncrypt,name,description});
    return newUser;
}
const loginUserService=async(authUser:Auth)=>{
    const {email,password}=authUser;
    console.log(authUser);
    const userPass=await UserModel.findOne({email});
    
    if(!userPass){
        return 'User not exist'
    }
    const passwordHash=userPass.password;
    console.log(passwordHash);
    const isCorrect=await verify(password,passwordHash);
    console.log(isCorrect);
    
    if(!isCorrect){
        return 'Wrong password';
    }
    const token=await singToken(email);

    const data={token:token,
        user:{
            email:userPass.email,
            name:userPass.name,
            description:userPass.description
        },
    };
    console.log(token);
    return data;
}
export {registerUserService,loginUserService};