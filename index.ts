const hoge = new (class {
  constructor() {
    console.log("42");
  }
})();
const foo = class {
  static get bar() {}
};

// -> { fo_o: { a: 'hoge', b: 'fuga' } }

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
