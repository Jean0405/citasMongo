import "dotenv/config";

export const server = {
  PORT: process.env.PORT || 3300,
  HOSTNAME: process.env.HOST || "localhost",
};
