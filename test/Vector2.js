import test from 'ava';
import { Vector2 } from '../dist/mr.ringer.js';

test('foo', (t) => {
	t.pass();
});

test('Creates new Vector2 with 0, 0 when no arguments provided', async (t) => {
	const vec = new Vector2();
	t.is(vec.x, 0);
	t.is(vec.y, 0);
});

test('Creates new Vector2 with 0, 0 when invalid arguments provided', async (t) => {
	const vec = new Vector2('string', false);
	t.is(vec.x, 0);
	t.is(vec.y, 0);
});

test('Adds number to vector2', async (t) => {
	const vec = new Vector2();
	vec.add(1);

	t.is(vec.x, 1);
	t.is(vec.y, 1);
});

test('Fails to add invalid argument to vector2', async (t) => {
	t.throws(() => new Vector2().add(false));
	t.throws(() => Vector2.add(new Vector2(0, 0), true));
});

test('Adds vector2 to vector2', async (t) => {
	const vec = new Vector2(1, 2);
	vec.add(new Vector2(1, 2));

	t.is(vec.x, 2);
	t.is(vec.y, 4);
});

test('Adds vector2 to vector2 (static)', async (t) => {
	const vec = Vector2.add(
		new Vector2(1, 2),
		new Vector2(1, 2),
	);

	t.is(vec.x, 2);
	t.is(vec.y, 4);
});
