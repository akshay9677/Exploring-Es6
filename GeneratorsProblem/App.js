const obj = {
  objPropIteratorGen: function* (a) {
    var propKey = Object.keys(a);
    for (const k of propKey) {
      yield k;
    }
  },
  objPropIteratorGenWithLimit: function* (a, n) {
    var propKey = Object.keys(a);
    for (const k of propKey) {
      if (n > 0) {
        n--;
        yield k;
      }
    }
  },
  objPropIterator: function (a) {
    let itr = Object.keys(a)[Symbol.iterator]();
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        let { done, value: key } = itr.next();
        if (done) {
          return { done: true };
        }
        return { value: [key, obj[key]] };
      },
    };
  },
};

module.exports = obj;
