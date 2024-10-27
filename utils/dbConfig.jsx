import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://finnance_owner:TWfDJ50bljxP@ep-small-star-a8cxj76n.eastus2.azure.neon.tech/finnance?sslmode=require"
);
export const db = drizzle(sql, { schema });
