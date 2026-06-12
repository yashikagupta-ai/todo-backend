import mongoose from "mongoose";
export default async function dbConnect(){
    await mongoose.connect(process.env.MONGO_URI);
}