import {model,models,Schema,Types} from 'mongoose';
import { User } from '../interfaces/user.interface';


const UserScheme=new Schema<User>({
    name:{
        type:String
    },
    description:{
        type:String,
        values:['gas','electrico']
    },
    password:{
        type:String,
        default:'hola :)'
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    },
    {
        timestamps:true,
        versionKey:false
    })
const UserModel=model('users',UserScheme);
export default UserModel;