import fs from "fs";
import { toJSON } from "../../index.js";

const content = fs.readFileSync("test/demo/list.txt", "utf-8");
fs.writeFileSync("test/demo/list.json", JSON.stringify(toJSON(content), null, 2));