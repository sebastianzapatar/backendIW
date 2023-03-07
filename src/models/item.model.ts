import {model,models,Schema,Types} from 'mongoose';
import { Car } from '../interfaces/car.interface';


const ItemScheme=new Schema<Car>({
    color:{
        type:String
    },
    gas:{
        type:String,
        values:['gas','electrico']
    },
    price:{
        type:Number
    },
    year:{
        type:Number
    },
    name:{
        type:String,
        
    }
    },
    {
        timestamps:true,
        versionKey:false
    })
const ItemModel=model('items',ItemScheme);
export default ItemModel;