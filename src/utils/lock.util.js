import { redisClient } from "../config/redis.js";

export async function acquireLock(key, value, ttl = 10) {
  const result = await redisClient.set(key, value, {
    NX: true,
    EX: ttl
  });

  return result === "OK";
}

export async function releaseLock(key, value) {
  const storedValue = await redisClient.get(key);

  if (storedValue === value) {
    await redisClient.del(key);
  }
}