import fs from "fs";
import { toJSON } from "../../index.js";

const content = fs.readFileSync("test/demo/list.txt", "utf-8");

const config = {
    getOrder: function getOrder(i) {
        return i+"test";
      }
}
fs.writeFileSync("test/demo/list.json", JSON.stringify(toJSON(content, config), null, 2));