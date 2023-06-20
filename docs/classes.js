import * as classLists from './classes.list.js';

export const classes = Object.values(classLists)
  .map((e) => {
    if (typeof e === 'object') return Object.values(e).map((e) => e.split(/\s/));
    return e.split(/\s/);
  })
  .flat(Infinity);