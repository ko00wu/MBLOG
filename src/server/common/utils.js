const Fs = require('fs')
const { promisify } = require('util')
const marked = require('marked')

// 排序函数
exports.sortFn = (key, order = 1) => {
  return (cur, next) =>
    (typeof key === 'function' ? key(cur) > key(next) : cur[key] > next[key])
      ? +order
      : -order
}
