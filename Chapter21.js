const obj = {
  symbolIteratorExample: function (arr) {
    var itr = arr[Symbol.iterator]();
    return itr.next();
  },
  nextMethod: function (arr) {
    var itr = arr[Symbol.iterator]();
    return [itr.next().value, itr.next().value];
  },
  iterableDataSource: function (str) {
    let count = 0;
    for (var k of str) {
      count++;
    }
    return count;
  },
  iterableLanguageConstructs: function (arr) {
    var [x, y, z] = arr;
    return [x, y, z];
  },
  implementingIteratables: function (arr) {
    const iterables = {
      [Symbol.iterator]() {
        let s = 0;
        const iterators = {
          next() {
            if (s <= 2) {
              s++;
            }
            switch (s) {
              case 1:
                return { value: "Hello", done: false };
              case 2:
                return { value: "world", done: false };
              default:
                return { value: undefined, done: true };
            }
          },
        };
        return iterators;
      },
    };
    for (const c of iterables) {
      arr.push(c);
    }
    return arr;
  },
  iteratableObject: function (o) {
    let itr = Object.keys(o)[Symbol.iterator]();
    const iterator = {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        let { done, value: key } = itr.next();
        if (done) {
          return { done: true };
        }
        return { value: [key, o[key]] };
      },
    };
    return iterator;
  },
  closingIterables: function (arr) {
    var k;
    for (const c of arr) {
      k = c;
      break;
    }
    return k;
  },
};
module.exports = obj;
