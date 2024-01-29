import mongoose from "mongoose";

export const connnectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi",
    })
        .then(() => console.log("Database Connected"))
        .catch((e) => console.log(e));
}