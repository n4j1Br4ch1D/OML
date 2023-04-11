export const defaultDictionary = {}

export const defaultConfig = {
  dictionary: defaultDictionary,
  extractIndent: extractIndent,
  removeSingleLineComments: removeSingleLineComments,
  getOrder: getOrder,
  extractIndicator: extractIndicator,
  extractName: extractName,
  extractMetaData: extractMetaData,
  extractComments: extractComments
}

export function toJSON(content, config) {
  const {
    dictionary,
    extractIndent,
    removeSingleLineComments,
    getOrder,
    extractIndicator,
    extractName,
    extractMetaData,
    extractComments
  } = { ...defaultConfig, ...config };
  const items =  [];
  const lines = content.trim().split("\n");
  for (let i = 0; i < lines.length; i++) {
    const indent = extractIndent(lines[i]);
    const line = removeSingleLineComments(lines[i]);
    const newItem = {
      lineNumber: i,
      order: getOrder(i), 
      indent: indent,
      indicator: extractIndicator(line),
      name: extractName(line),
      metaData: extractMetaData(line, dictionary),
      comment: extractComments(lines[i], "//"),
      subItems: [],
    };
    findParentArray(items, "indent", indent, "subItems").push(
      newItem
    );
  }
  return items[0];
}

export function toOML(obj, config) {
  let str='';
  const items = [obj];
  let indent = null;
  let indicator = null;
  parse(items, indent, indicator);
  function parse(items, indent, indicator) {
    items.forEach((item) => {
      str +=
      " ".repeat(item.indent) +
      item.indicator + " " +
      item.name + ", " +
      parseMetaData(item.metaData) +
      (item.comment!="" ? " //" + item.comment : '')
      + "\n";
      console.log("str", str);
    if (item.subItems.length > 0) {
      parse(item.subItems, indent, indicator);
    }
    });
    return str;
  }
  return str;
}

export function findParentArray(array, key, value, arrayKey) {
  for (let i = array.length - 1; i >= 0; i--) {
    const obj = array[i];
    if (obj[key] === value) {
      return array;
    } else if (obj[arrayKey]) {
      const result = findParentArray(obj[arrayKey], key, value, arrayKey);
      if (result) {
        return result;
      }
    }
  }
  return array;
}

export function parseMetaData(obj, dictionary) {
  console.log(obj);
  let str = '';
  for (let key in obj) {
    str += ' ' + key + ' ';
    if (Array.isArray(obj[key])) {
      str += obj[key].join(' ') + ',';
    } else {
      str += obj[key] + ',v';
    }
  }
  return str; //.slice(0, -1);
}

export function getOrder(i) {
  return i;
}

export function extractComments(str, subStr) {
  const index = str.indexOf(subStr);
  if (index === -1) {
    return "";
  } else {
    return str.substring(index + subStr.length);
  }
}

export function extractName(str) {
  return str.trim().split(",")[0].split(/\s+/).slice(1).join(" ");
}

export function extractIndicator(str) {
  return str.trim().split(/\s+/)[0];
} 

export function extractIndent(str) {
  return str.search(/\S/);
}

export function extractMetaData(str, dictionary) {
  const obj = {};
  const pairs = str.split(",").slice(1);
  pairs.forEach((pair) => {
    const [key, ...values] = pair.trim().split(/\s+/);
    if (obj[key]) {
      obj[key].push(...values);
    } else {
      obj[key] = values;
    }
  });
  return obj;
}

export function getLine(str, lineNumber) {
  const lines = str.split("\n");
  if (lineNumber < 1 || lineNumber > lines.length) {
    return "";
  } else {
    return lines[lineNumber - 1];
  }
}

export function getItem(str, indent, number) {
  const re = new RegExp(`^ {${indent}}\\S`);
  const lines = str.split("\n");
  const matches = lines.filter((line) => re.test(line));

  if (number < 1 || number > matches.length) {
    return "";
  } else {
    return matches[number - 1].trim();
  }
}

export function removeSingleLineComments(str) {
  return str.replace(/\/\/.*$/gm, '');
}