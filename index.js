import app from "./src/app.js";
import { connectRedis } from "./src/config/redis.js";

const PORT = 3000;

async function startServer() {
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();