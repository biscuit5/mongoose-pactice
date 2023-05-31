import { HydratedDocument, Model } from "mongoose";

export interface IUser{
    id:string;
    role:"student";
    password:string;
    name:{
      firstName:string;
      middleName:string;
      lastName:string;
    }
    dateofBirth:string
    email?:string;
    contactNumber:string;
    argentNumber:string;
    address:string;
    parmentAddress:string
  }


  // static method

  //  interface UserModel extends Model<IUser> {
  //   getAdminUsers():IUser[];
  // }
  
// instance methods
  export interface IUserMethods {
    fullName(): string;
  }

  export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
  