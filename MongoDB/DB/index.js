import mongoose from "mongoose";

const Connection = async (username, password) => {
  // Local MongoDB URL
  const localURL = "mongodb://127.0.0.1:27017/crud-app";

  // Remote MongoDB Atlas URL
  const atlasURL = `mongodb://${username}:${password}@ac-zsijelu-shard-00-00.prtnugr.mongodb.net:27017,ac-zsijelu-shard-00-01.prtnugr.mongodb.net:27017,ac-zsijelu-shard-00-02.prtnugr.mongodb.net:27017/crud-app?ssl=true&replicaSet=atlas-okng14-shard-0&authSource=admin&retryWrites=true&w=majority`;

  // Use local DB if `USE_LOCAL_DB=true` is set in .env
  // const shouldUseLocal = process.env.USE_LOCAL_DB === "true";
  const shouldUseLocal = "true";

  const URL = shouldUseLocal ? localURL : atlasURL;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 15000,
    });
    console.log(`✅ Connected to ${shouldUseLocal ? "local" : "Atlas"} MongoDB`);
  } catch (e) {
    console.error("❌ Error while connecting to Mongoose:", e.message);
  }
};

export default Connection;
