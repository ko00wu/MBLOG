/**
 * 排序函数
 * @param {*} key --排序的对象键名，或者函数
 * @param {Number} order --排序方式  1(顺序)  -1(倒序)
 */

exports.sortFn = (key, order = 1) => {
  return (cur, next) =>
    (typeof key === 'function' ? key(cur) > key(next) : cur[key] > next[key])
      ? +order
      : -order
}
