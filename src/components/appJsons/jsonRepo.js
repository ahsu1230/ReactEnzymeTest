import json from './family.json';

function all() {
  return json;
}

function get(index) {
  return json[index];
}

function size() {
  return json.length;
}

export const mainRepo = {
  all: all,
  get: get,
  size: size
}
