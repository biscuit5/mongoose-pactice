import { Schema, model, Model } from 'mongoose';
import {  IUser,IUserMethods, UserModel } from './user.interface';

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    id:{
      type:String,required:true,unique:true
    },
    role:{
      type:String,required:true
    },
    password:{
      type:String,required:true
    },
    name: {
      firstName:{
        type:String,required:true
      },
      middleName:{
        type:String,required:true
      },
      lastName:{
        type:String,required:true
      }
    },
    dateofBirth:{
      type:String,required:true
    },
    email: { type: String, required: true },
    // avatar: String
  });

  userSchema.static('getAdminUsers',async function getAdminUsers() {
    const admins = await this.find({role:'admin'})
  });

  userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  

  const User = model<IUser,UserModel>('User', userSchema);

  export default User;