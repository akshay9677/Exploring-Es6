const obj = {
  promiseExample: function (str) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var a = "Hello, " + str;
        resolve(a);
        if (!a) {
          reject("Not over");
        }
      }, 1000);
    });
  },
  promiseAll: Promise.resolve(22),
  promiseAll2: Promise.resolve(23),
  promiseRace1: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  }),
  promiseRace2: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(43);
    }, 5000);
  }),
  promiseExample2: function (str) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var a = "Hello, " + str;
        if (a) {
          reject("Error Occured");
        }
      }, 1000);
    });
  },
};

module.exports = obj;
