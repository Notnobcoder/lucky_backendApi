import mongoose from "mongoose";

export const Connection = async () => {
  // const Url = process.env.MONGO_URL2
  const MONGO_URL = "mongodb+srv://dbUser:dbUserPassword@cluster0.1uu9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

  // const URI = 'mongodb://localhost:27017/FlipkartClone'
  try {
    await mongoose.connect(MONGO_URL, {});
    console.log('Database connected Successfully')
  } catch (error) {
    console.log('Error while connecting to database', error.message)
  }
}


