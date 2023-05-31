import {  IUser } from "./user.interface";
import User from "./user.model";

export const crateUserDb=async(payload:IUser):Promise<IUser>=>{
    const user = await new User(payload);
    await user.save();
    console.log(user.fullName())
    return user;
  }
  export const getUserDb=async()=>{

    const users=await User.find()
    return users;

  };

  export const getUserByidFormDb=async(payload:string):Promise<IUser | null>=>{

    const user=await User.findOne({id:payload},{name:1})

    return user;
  }
  export const getAdminFormDb=async()=>{

    const admins = await User.getAdminUsers()
  }


