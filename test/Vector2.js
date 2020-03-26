import test from 'ava';
import { Vector2 } from '../dist/mr.ringer.js';

test('Creates new Vector2 with 0, 0 when no arguments provided', async (t) => {
  const vec = new Vector2();
  t.is(vec.x, 0);
  t.is(vec.y, 0);
});

test('Create Vector2 without "new" keyword', async (t) => {
  const vec = Vector2();
  t.is(vec.x, 0);
  t.is(vec.y, 0);
});

test('Creates new Vector2 with 0, 0 when invalid arguments provided', async (t) => {
  const vec = new Vector2('string', false);
  t.is(vec.x, 0);
  t.is(vec.y, 0);
});

test('Clones Vector2', async (t) => {
  const vec1 = new Vector2(1, 1);
  const vec2 = vec1.clone();

  t.is(vec2.x, vec1.x);
  t.is(vec2.y, vec1.y);

  vec2.x = 5;
  t.is(vec2.x, 5);
  t.is(vec1.x, 1);
});

test('Converts Vector2 to array', async (t) => {
  const vec = new Vector2(1, 2);

  t.deepEqual(vec.toArray(), [1, 2]);
});

test('Converts array to Vector2', async (t) => {
  t.is(Vector2.fromArray([10, 20]).x, 10);
  t.is(Vector2.fromArray([10, 20]).y, 20);
});

test('Converts Vector2 to JSON', async (t) => {
  const vec = new Vector2(1, 2);

  t.deepEqual(vec.toJSON(), '{"x":1,"y":2}');
});

test('Converts json to Vector2', async (t) => {
  t.is(Vector2.fromJSON('{"x":1,"y":2}').x, 1);
  t.is(Vector2.fromJSON({ x: 1, y: 2 }).y, 2);
});

test('Adds Vector2 to Vector2', async (t) => {
  const vec = new Vector2(1, 2);
  vec.add(new Vector2(1, 2));

  t.is(vec.x, 2);
  t.is(vec.y, 4);
});

test('Adds number to Vector2', async (t) => {
  const vec = new Vector2(1, 2);
  vec.add(2);

  t.is(vec.x, 3);
  t.is(vec.y, 4);
});

test('Adds Vector2 to Vector2 (static)', async (t) => {
  const vec = Vector2.add(new Vector2(1, 2), new Vector2(1, 2));

  t.is(vec.x, 2);
  t.is(vec.y, 4);
});

test('Chain vector additions', async (t) => {
  const vec = Vector2.add(new Vector2(1, 2), new Vector2(1, 2))
    .add(new Vector2(1, 2))
    .add(new Vector2(1, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 8);
});

test('Throws error for invalid Vector2 add arguments', async (t) => {
  t.throws(() => Vector2.add('five', 2));
  t.throws(() => Vector2.add(false, 2));
  t.throws(() => Vector2.add({ foo: 'bar' }, 2));
  t.throws(() => Vector2.add(undefined, 2));
  t.throws(() => Vector2.add(null, 2));
});

test('Subtracts a Vector2 from Vector2', async (t) => {
  const vec = new Vector2(6, 4);
  vec.subtract(new Vector2(2, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 2);
});

test('Subtracts a number from Vector2', async (t) => {
  const vec = new Vector2(6, 4);
  vec.subtract(2);

  t.is(vec.x, 4);
  t.is(vec.y, 2);
});

test('Subtracts Vector2 from Vector2 (static)', async (t) => {
  const vec = Vector2.subtract(new Vector2(10, 10), new Vector2(2, 5));

  t.is(vec.x, 8);
  t.is(vec.y, 5);
});

test('Original vectors used in subtraction are not modified', async (t) => {
  const a = new Vector2(10, 10);
  const b = new Vector2(2, 2);

  Vector2.subtract(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector subtractions', async (t) => {
  const vec = Vector2.subtract(new Vector2(100, 100), new Vector2(10, 10))
    .subtract(new Vector2(10, 10))
    .subtract(new Vector2(10, 10));

  t.is(vec.x, 70);
  t.is(vec.y, 70);
});

test('Throws error for invalid Vector2 subtract arguments', async (t) => {
  t.throws(() => Vector2.subtract('five', 2));
  t.throws(() => Vector2.subtract(false, 2));
  t.throws(() => Vector2.subtract({ foo: 'bar' }, 2));
  t.throws(() => Vector2.subtract(5, new Vector2()));
  t.throws(() => Vector2.subtract(undefined, new Vector2()));
  t.throws(() => Vector2.subtract(null, new Vector2()));
  t.throws(() => Vector2.subtract(new Vector2()));
  t.throws(() => Vector2.subtract(new Vector2(), null));
  t.throws(() => Vector2.subtract(new Vector2(), false));
});

test('Scales Vector2 by scalar', async (t) => {
  const vec = new Vector2(2, 2);
  vec.scale(2);

  t.is(vec.x, 4);
  t.is(vec.y, 4);
});

test('Scales Vector2 by scalar (static)', async (t) => {
  const vec = Vector2.scale(Vector2(2, 2), 2);

  t.is(vec.x, 4);
  t.is(vec.y, 4);
});

test('Original vector used in scale are not modified', async (t) => {
  const a = new Vector2(10, 10);

  Vector2.scale(a, 2);

  t.is(a.x, 10);
});

test('Chain vectors scales', async (t) => {
  const vec = new Vector2(2, 2);
  vec.scale(2).scale(2).scale(2);

  t.is(vec.x, 16);
  t.is(vec.y, 16);
});

test('Throws error for invalid Vector2 scale arguments', async (t) => {
  t.throws(() => Vector2.scale('five', 2));
  t.throws(() => Vector2.scale(false, 2));
  t.throws(() => Vector2.scale({ foo: 'bar' }, 2));
  t.throws(() => Vector2.scale(5, new Vector2()));
  t.throws(() => Vector2.scale(undefined, new Vector2()));
  t.throws(() => Vector2.scale(null, new Vector2()));
  t.throws(() => Vector2.scale(new Vector2()));
  t.throws(() => Vector2.scale(new Vector2(), null));
  t.throws(() => Vector2.scale(new Vector2(), false));
  t.throws(() => Vector2.scale(new Vector2(), new Vector2()));
  t.throws(() => Vector2.scale({ x: 0, y: 0 }, 2));
});

test('Multiplies vectors', async (t) => {
  const vec = Vector2(2, 2);
  vec.multiply(Vector2(2, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 4);
});

test('Multiplies vectors (static)', async (t) => {
  const vec = Vector2.multiply(Vector2(2, 2), Vector2(2, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 4);
});

test('Original vectors used in multiplicatiton are not modified', async (t) => {
  const a = Vector2(10, 10);
  const b = Vector2(2, 2);

  Vector2.multiply(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector multiplicatitons', async (t) => {
  const vec = Vector2(2, 2);

  vec.multiply(Vector2(2, 2)).multiply(Vector2(2, 2)).multiply(Vector2(2, 2));

  t.is(vec.x, 16);
  t.is(vec.y, 16);
});

test('Throws error for invalid Vector2 multiply arguments', async (t) => {
  t.throws(() => Vector2.multiply('two', 2));
  t.throws(() => Vector2.multiply(false, 2));
  t.throws(() => Vector2.multiply({ two: true }, 2));
  t.throws(() => Vector2.multiply(Vector2()));
  t.throws(() => Vector2.multiply(Vector2(), 2));
  t.throws(() => Vector2.multiply(undefined, Vector2()));
  t.throws(() => Vector2.multiply(Vector2(), null));
  t.throws(() => Vector2.multiply(Vector2(), { x: 0, y: 0 }));
});

test('Divides a Vector2 from Vector2', async (t) => {
  const vec = new Vector2(4, 4);
  vec.divide(new Vector2(2, 2));

  t.is(vec.x, 2);
  t.is(vec.y, 2);
});

test('Divides a number from Vector2', async (t) => {
  const vec = new Vector2(6, 4);
  vec.divide(2);

  t.is(vec.x, 3);
  t.is(vec.y, 2);
});

test('Divides Vector2 from Vector2 (static)', async (t) => {
  const vec = Vector2.divide(new Vector2(10, 10), new Vector2(2, 5));

  t.is(vec.x, 5);
  t.is(vec.y, 2);
});

test('Original vectors used in division are not modified', async (t) => {
  const a = new Vector2(10, 10);
  const b = new Vector2(2, 2);

  Vector2.divide(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector divisions', async (t) => {
  const vec = Vector2.divide(new Vector2(100, 100), new Vector2(10, 10))
    .divide(new Vector2(5, 5))
    .divide(new Vector2(2, 2));

  t.is(vec.x, 1);
  t.is(vec.y, 1);
});

test('Throws error for invalid Vector2 division arguments', async (t) => {
  t.throws(() => Vector2.divide('five', 2));
  t.throws(() => Vector2.divide(false, 2));
  t.throws(() => Vector2.divide({ foo: 'bar' }, 2));
  t.throws(() => Vector2.divide(5, new Vector2()));
  t.throws(() => Vector2.divide(undefined, new Vector2()));
  t.throws(() => Vector2.divide(null, new Vector2()));
  t.throws(() => Vector2.divide(new Vector2()));
  t.throws(() => Vector2.divide(new Vector2(), null));
  t.throws(() => Vector2.divide(new Vector2(), false));
});

test('Get the magnitude of a Vector2', async (t) => {
  const magnitude = Vector2(3, 4).magnitude();
  t.is(magnitude, 5);
});

test('Check the magnitude of a Vector2 is not negative', async (t) => {
  const magnitude = Vector2(-100, 0).magnitude();
  t.is(magnitude, 100);
});

test('Normalize a vector', async (t) => {
  const vec = Vector2(3, 4).normalize();
  t.is(vec.magnitude(), 1);
});

test('Does not throw error normalizing a vector with a magnitude of 0', async (t) => {
  const vec = Vector2(0, 0).normalize();
  t.is(vec.magnitude(), 0);
});

test('Get the dot product of a Vector2', async (t) => {
  const dot = Vector2(2, 5).dot(Vector2(7, 1));
  t.is(dot, 19);
});

test('Get the dot product of a Vector2 (static)', async (t) => {
  const dot = Vector2.dot(Vector2(2, 5), Vector2(7, 1));
  t.is(dot, 19);
});

test('Throws error for invalid Vector2 dot arguments', async (t) => {
  t.throws(() => Vector2.dot('five', 2));
  t.throws(() => Vector2.dot(false, 2));
  t.throws(() => Vector2.dot({ foo: 'bar' }, 2));
  t.throws(() => Vector2.dot(5, new Vector2()));
  t.throws(() => Vector2.dot(undefined, new Vector2()));
  t.throws(() => Vector2.dot(null, new Vector2()));
  t.throws(() => Vector2.dot(new Vector2()));
  t.throws(() => Vector2.dot(new Vector2(), null));
  t.throws(() => Vector2.dot(new Vector2(), false));
});
