import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "yourSecret";

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);
