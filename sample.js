Suplier;
const iterable = {
  itemCount: 10,
  [Symbol.iterator]() {
    let localItemCount = this.itemCount;
    return {
      next() {
        if (localItemCount > 0) {
          localItemCount--;
          return { value: localItemCount, done: false };
        } else {
          return { value: null, done: true };
        }
      },
    };
  },
};

//Consumer
for (let x of iterable) {
  console.log(x);
}
