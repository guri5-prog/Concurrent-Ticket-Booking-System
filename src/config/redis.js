import { createClient } from "redis";

export const redisClient = createClient();

export async function connectRedis() {
  redisClient.on("error", (err) => console.error("Redis Error", err));

  await redisClient.connect();
  console.log("Connected to Redis");
}