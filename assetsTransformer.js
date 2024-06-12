import { basename } from 'path';

export function process({ filename }) {
  return 'module.exports = ' + JSON.stringify(basename(filename)) + ';';
}
