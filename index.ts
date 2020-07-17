interface Foo {
  (s: string): void;
  foo(n: number): void;
  (n: number): void;
  (sn: string | number): void;
  bar(): void;
  baz(): void;
  call(): number;
}

interface Bar {
  (s: string): void;
  foo(): void;
  call(): number;
}

class Baz {
  constructor() {
    console.log();
  }
  foo() {
    console.log();
  }
  new() {
    console.log();
  }
}
