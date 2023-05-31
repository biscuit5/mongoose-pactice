import { NextFunction, Request, Response } from "express";
import { crateUserDb, getUserDb, getUserByidFormDb, getAdminFormDb } from './user.service';


export const createUser=async(req:Request, res:Response,next:NextFunction) => {
    const data = req.body;
  const user =await crateUserDb(data);

  res.status(200).json({
    status:"success",
    data:user
  })
  
}
export const getUser =async (req:Request,res:Response,next:NextFunction)=>{
     
    const user = await getUserDb();

    res.status(200).json({
        status:"success",
        data:user
    })
}
export const UserbyId = async(req:Request,res:Response,next:NextFunction)=>{
    const{id}=req.params
    const user = await getUserByidFormDb(id);
    console.log("hitted from by id user");
    res.status(200).json({
        status:"success",
        data : user
    })
}
export const getAdminsUsers = async(req:Request,res:Response,next:NextFunction)=>{
    
    const user = await getAdminFormDb();
    console.log("hitted from by admin");
    res.status(200).json({
        status:"success",
        data : user
    })
}