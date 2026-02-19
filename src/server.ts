import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 4000;

async function server() {
    try {
        // Test Prisma connection
        await prisma.$connect();  // <-- this is what you need
        console.log("✅ Connected to the database");

        // Start Express server
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        await prisma.$disconnect();
        process.exit(1); // exit on failure

    }
}

server();
