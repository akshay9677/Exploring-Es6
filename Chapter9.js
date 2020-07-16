const obj = {
  letBlockedScopeCheck: function () {
    if (true) {
      const tmp = 123;
    }
    try {
      return temp;
    } catch (e) {
      return e.name;
    }
  },
  constInLoops: function (arr) {
    let result = [];
    for (const key of arr) {
      result.push(key);
    }
    return result;
  },
  temporalDeadZone: function () {
    if (true) {
      try {
        return temp;
        let tmp;
      } catch (e) {
        return e.name;
      }
    }
  },
  varInLoops: function (arr, n) {
    for (var i = 0; i < 3; i++) {
      arr.push(() => i);
    }
    return arr.map((x) => x());
  },
  letInLoops: function (arr, n) {
    for (let i = 0; i < 3; i++) {
      arr.push(() => i);
    }
    return arr.map((x) => x());
  },
};
module.exports = obj;
