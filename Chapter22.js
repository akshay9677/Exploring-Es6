const obj = {
  genExample: function* () {
    yield "a";
    yield "b";
    yield "c";
  },
  genRecursion: function* () {
    yield* this.genExample();
    yield "d";
    yield "e";
  },
  genSendValues: function* () {
    var a = yield;
    return a;
  },
  genCoroutines: function* (ak) {
    var x = yield this.timeoutFunc(ak, 2000);
  },
  timeoutFunc: function (val, ms) {
    let a;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        a = val;
        resolve(a);
      }, ms);
    });
  },
};
module.exports = obj;
