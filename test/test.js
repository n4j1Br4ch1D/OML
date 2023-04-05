import fs from "fs";
import { toOML } from "../index.js";

const content = fs.readFileSync("test/demo/list.json", "utf-8");
const obj = JSON.parse(content);
fs.writeFileSync("test/demo/list.txt", toOML(obj, null, null));