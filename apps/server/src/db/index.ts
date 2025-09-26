import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../../prisma/generated/client.js";

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
