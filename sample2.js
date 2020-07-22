const iter = {
  itemcount: 10,
  *[Symbol.iterator]() {
    let i = this.itemcount;
    yield* this.next(i);
  },
  *next(i) {
    while (i > 0) {
      i--;
      yield i;
    }
    return;
  },
};

for (let a of iter) {
  console.log(a);
}
