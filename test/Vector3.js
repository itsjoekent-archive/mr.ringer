import test from 'ava';
import { Vector2, Vector3 } from '../dist/mr.ringer.js';

test('Creates new Vector3 with 0, 0, 0 when no arguments provided', async (t) => {
  const vec = new Vector3();
  t.is(vec.x, 0);
  t.is(vec.y, 0);
  t.is(vec.z, 0);
});

test('Create Vector3 without "new" keyword', async (t) => {
  const vec = Vector3();
  t.is(vec.x, 0);
  t.is(vec.y, 0);
  t.is(vec.z, 0);
});

test('Creates new Vector3 with 0, 0 when invalid arguments provided', async (t) => {
  const vec = new Vector3('string', false);
  t.is(vec.x, 0);
  t.is(vec.y, 0);
  t.is(vec.z, 0);
});

test('Clones Vector3', async (t) => {
  const vec1 = new Vector3(1, 1, 1);
  const vec2 = vec1.clone();

  t.is(vec2.x, vec1.x);
  t.is(vec2.y, vec1.y);
  t.is(vec2.z, vec1.z);

  vec2.x = 5;
  t.is(vec2.x, 5);
  t.is(vec1.x, 1);
});

test('Converts Vector3 to array', async (t) => {
  const vec = new Vector3(2, 2, 2);

  t.deepEqual(vec.toArray(), [2, 2, 2]);
});

test('Converts array to Vector3', async (t) => {
  t.is(Vector3.fromArray([10, 20, 30]).x, 10);
  t.is(Vector3.fromArray([10, 20, 30]).y, 20);
  t.is(Vector3.fromArray([10, 20, 30]).z, 30);
});

test('Converts Vector3 to JSON', async (t) => {
  const vec = new Vector3(1, 2, 3);

  t.deepEqual(vec.toJSON(), '{"x":1,"y":2,"z":3}');
});

test('Converts json to Vector3', async (t) => {
  t.is(Vector3.fromJSON('{"x":1,"y":2,"z":3}').x, 1);
  t.is(Vector3.fromJSON({ x: 1, y: 2, z: 3 }).y, 2);
});

test('Adds Vector3 to Vector3', async (t) => {
  const vec = new Vector3(1, 2, 3);
  vec.add(new Vector3(1, 2, 3));

  t.is(vec.x, 2);
  t.is(vec.y, 4);
  t.is(vec.z, 6);
});

test('Adds number to Vector3', async (t) => {
  const vec = new Vector3(1, 2, 3);
  vec.add(2);

  t.is(vec.x, 3);
  t.is(vec.y, 4);
  t.is(vec.z, 5);
});

test('Adds Vector3 to Vector3 (static)', async (t) => {
  const vec = Vector3.add(new Vector3(1, 2, 3), new Vector3(1, 2, 3));

  t.is(vec.x, 2);
  t.is(vec.y, 4);
  t.is(vec.z, 6);
});

test('Chain vector additions', async (t) => {
  const vec = Vector3.add(new Vector3(1, 2, 3), new Vector3(1, 2, 3))
    .add(new Vector3(1, 2, 3))
    .add(new Vector3(1, 2, 3));

  t.is(vec.x, 4);
  t.is(vec.y, 8);
  t.is(vec.z, 12);
});

test('Throws error for invalid Vector3 add arguments', async (t) => {
  t.throws(() => Vector3.add('five', 2));
  t.throws(() => Vector3.add(false, 2));
  t.throws(() => Vector3.add({ foo: 'bar' }, 2));
  t.throws(() => Vector3.add(undefined, 2));
  t.throws(() => Vector3.add(null, 2));
  t.throws(() => Vector3.add(Vector2()));
});

test('Subtracts a Vector3 from Vector3', async (t) => {
  const vec = new Vector3(6, 4, 2);
  vec.subtract(new Vector3(2, 2, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 2);
  t.is(vec.z, 0);
});

test('Subtracts a number from Vector3', async (t) => {
  const vec = new Vector3(6, 4, 2);
  vec.subtract(2);

  t.is(vec.x, 4);
  t.is(vec.y, 2);
  t.is(vec.z, 0);
});

test('Subtracts Vector3 from Vector3 (static)', async (t) => {
  const vec = Vector3.subtract(new Vector3(10, 10, 10), new Vector3(2, 5, 20));

  t.is(vec.x, 8);
  t.is(vec.y, 5);
  t.is(vec.z, -10);
});

test('Original vectors used in subtraction are not modified', async (t) => {
  const a = new Vector3(10, 10, 10);
  const b = new Vector3(2, 2, 2);

  Vector3.subtract(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector subtractions', async (t) => {
  const vec = Vector3.subtract(
    new Vector3(100, 100, 100),
    new Vector3(10, 10, 10)
  )
    .subtract(new Vector3(10, 10, 10))
    .subtract(new Vector3(10, 10, 10));

  t.is(vec.x, 70);
  t.is(vec.y, 70);
  t.is(vec.z, 70);
});

test('Throws error for invalid Vector3 subtract arguments', async (t) => {
  t.throws(() => Vector3.subtract('five', 2));
  t.throws(() => Vector3.subtract(false, 2));
  t.throws(() => Vector3.subtract({ foo: 'bar' }, 2));
  t.throws(() => Vector3.subtract(5, new Vector3()));
  t.throws(() => Vector3.subtract(undefined, new Vector3()));
  t.throws(() => Vector3.subtract(null, new Vector3()));
  t.throws(() => Vector3.subtract(new Vector3()));
  t.throws(() => Vector3.subtract(new Vector3(), Vector2()));
  t.throws(() => Vector3.subtract(new Vector3(), null));
  t.throws(() => Vector3.subtract(new Vector3(), false));
});

test('Scales Vector3 by scalar', async (t) => {
  const vec = new Vector3(2, 4, 6);
  vec.scale(2);

  t.is(vec.x, 4);
  t.is(vec.y, 8);
  t.is(vec.z, 12);
});

test('Scales Vector3 by scalar (static)', async (t) => {
  const vec = Vector3.scale(Vector3(2, 2, 2), 2);

  t.is(vec.x, 4);
  t.is(vec.y, 4);
  t.is(vec.z, 4);
});

test('Original vector used in scale are not modified', async (t) => {
  const a = new Vector3(10, 10, 10);

  Vector3.scale(a, 2);

  t.is(a.x, 10);
});

test('Chain vectors scales', async (t) => {
  const vec = new Vector3(2, 2, 2);
  vec.scale(2).scale(2).scale(2);

  t.is(vec.x, 16);
  t.is(vec.y, 16);
  t.is(vec.z, 16);
});

test('Throws error for invalid Vector3 scale arguments', async (t) => {
  t.throws(() => Vector3.scale('five', 2));
  t.throws(() => Vector3.scale(false, 2));
  t.throws(() => Vector3.scale({ foo: 'bar' }, 2));
  t.throws(() => Vector3.scale(5, new Vector3()));
  t.throws(() => Vector3.scale(undefined, new Vector3()));
  t.throws(() => Vector3.scale(null, new Vector3()));
  t.throws(() => Vector3.scale(new Vector3()));
  t.throws(() => Vector3.scale(new Vector2(), 1));
  t.throws(() => Vector3.scale(new Vector3(), null));
  t.throws(() => Vector3.scale(new Vector3(), false));
  t.throws(() => Vector3.scale(new Vector3(), new Vector3()));
  t.throws(() => Vector3.scale({ x: 0, y: 0 }, 2));
});

test('Multiplies vectors', async (t) => {
  const vec = Vector3(2, 4, 6);
  vec.multiply(Vector3(2, 4, 6));

  t.is(vec.x, 4);
  t.is(vec.y, 16);
  t.is(vec.z, 36);
});

test('Multiplies vectors (static)', async (t) => {
  const vec = Vector3.multiply(Vector3(2, 2, 2), Vector3(2, 2, 2));

  t.is(vec.x, 4);
  t.is(vec.y, 4);
  t.is(vec.z, 4);
});

test('Original vectors used in multiplicatiton are not modified', async (t) => {
  const a = Vector3(10, 10, 10);
  const b = Vector3(2, 2, 2);

  Vector3.multiply(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector multiplicatitons', async (t) => {
  const vec = Vector3(2, 2, 2);

  vec
    .multiply(Vector3(2, 2, 2))
    .multiply(Vector3(2, 2, 2))
    .multiply(Vector3(2, 2, 2));

  t.is(vec.x, 16);
  t.is(vec.y, 16);
  t.is(vec.z, 16);
});

test('Throws error for invalid Vector3 multiply arguments', async (t) => {
  t.throws(() => Vector3.multiply('two', 2));
  t.throws(() => Vector3.multiply(false, 2));
  t.throws(() => Vector3.multiply({ two: true }, 2));
  t.throws(() => Vector3.multiply(Vector3()));
  t.throws(() => Vector3.multiply(Vector3(), Vector2()));
  t.throws(() => Vector3.multiply(Vector3(), 2));
  t.throws(() => Vector3.multiply(undefined, Vector3()));
  t.throws(() => Vector3.multiply(Vector3(), null));
  t.throws(() => Vector3.multiply(Vector3(), { x: 0, y: 0 }));
});

test('Divides a Vector3 from Vector3', async (t) => {
  const vec = new Vector3(4, 8, 16);
  vec.divide(new Vector3(2, 2, 2));

  t.is(vec.x, 2);
  t.is(vec.y, 4);
  t.is(vec.z, 8);
});

test('Divides a number from Vector3', async (t) => {
  const vec = new Vector3(6, 4, 2);
  vec.divide(2);

  t.is(vec.x, 3);
  t.is(vec.y, 2);
  t.is(vec.z, 1);
});

test('Divides Vector3 from Vector3 (static)', async (t) => {
  const vec = Vector3.divide(new Vector3(10, 10, 10), new Vector3(2, 5, 10));

  t.is(vec.x, 5);
  t.is(vec.y, 2);
  t.is(vec.z, 1);
});

test('Original vectors used in division are not modified', async (t) => {
  const a = new Vector3(10, 10, 10);
  const b = new Vector3(2, 2, 2);

  Vector3.divide(a, b);

  t.is(a.x, 10);
  t.is(b.y, 2);
});

test('Chain vector divisions', async (t) => {
  const vec = Vector3.divide(
    new Vector3(100, 100, 100),
    new Vector3(10, 10, 10)
  )
    .divide(new Vector3(5, 5, 5))
    .divide(new Vector3(2, 2, 2));

  t.is(vec.x, 1);
  t.is(vec.y, 1);
  t.is(vec.z, 1);
});

test('Throws error for invalid Vector3 division arguments', async (t) => {
  t.throws(() => Vector3.divide('five', 2));
  t.throws(() => Vector3.divide(false, 2));
  t.throws(() => Vector3.divide({ foo: 'bar' }, 2));
  t.throws(() => Vector3.divide(5, Vector3()));
  t.throws(() => Vector3.divide(undefined, Vector3()));
  t.throws(() => Vector3.divide(null, Vector3()));
  t.throws(() => Vector3.divide(Vector3(), Vector2()));
  t.throws(() => Vector3.divide(Vector3(), null));
  t.throws(() => Vector3.divide(Vector3(), false));
});

test('Get the magnitude of a Vector3', async (t) => {
  const magnitude = parseFloat(Vector3(3, 4, 5).magnitude().toFixed(3));
  t.is(magnitude, 7.071);
});

test('Check the magnitude of a Vector3 is not negative', async (t) => {
  const magnitude = Vector3(-100, 0, 0).magnitude();
  t.is(magnitude, 100);
});

test('Normalize a vector', async (t) => {
  const vec = Vector3(3, 0, 0).normalize();
  t.is(vec.magnitude(), 1);
});

test('Does not throw error normalizing a vector with a magnitude of 0', async (t) => {
  const vec = Vector3(0, 0, 0).normalize();
  t.is(vec.magnitude(), 0);
});

test('Get the dot product of a Vector3', async (t) => {
  const dot = Vector3(2, 3, 4).dot(Vector3(2, 3, 4));
  t.is(dot, 29);
});

test('Get the dot product of a Vector3 (static)', async (t) => {
  const dot = Vector3.dot(Vector3(2, 3, 4), Vector3(2, 3, 4));
  t.is(dot, 29);
});

test('Throws error for invalid Vector3 dot arguments', async (t) => {
  t.throws(() => Vector3.dot('five', 2));
  t.throws(() => Vector3.dot(false, 2));
  t.throws(() => Vector3.dot({ foo: 'bar' }, 2));
  t.throws(() => Vector3.dot(5, Vector3()));
  t.throws(() => Vector3.dot(undefined, Vector3()));
  t.throws(() => Vector3.dot(null, Vector3()));
  t.throws(() => Vector3.dot(Vector3(), Vector2()));
  t.throws(() => Vector3.dot(Vector3(), null));
  t.throws(() => Vector3.dot(Vector3(), false));
});
