const obj1 = {
  fo_o: {
    a: "a",
    b: "b",
  },
};

const bar = {
  a: "hoge",
  b: "fuga",
};

//({ ...obj1.fo_o } = 2);
({ ...obj1.fo_o } = bar);

console.log(obj1);

//
//const camelCased = snake_cased;
//foo.qux.boom_pow = { bar: boom.bam_pow };
//foo.boom_pow.qux = bar.baz_boom.something;
//({ ...obj.fo_o.ba_r } = baz);
//const { category_id: category } = query;
//bar_baz.b.foo = function () {
//console.log("a");
//};
//const a = foo_bar.baz;
//foo.bar_baz;
//foo_bar_baz.foo = function () {
//return 42;
//};
//foo.ba_r.qux = 42;
//const { [category_id]: categoryId } = query;
