import fs from "fs";
import { toJSON } from "../index.js";

const content = fs.readFileSync("test/list.txt", "utf-8");
fs.writeFileSync("test/list.json", JSON.stringify(toJSON(content), null, 2));
