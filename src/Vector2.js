/**
 * @typedef Vector2
 * @type {String} ringerType
 * @type {Number} x
 * @type {Number} y
 * @type {Function} add
 */

/**
 * Check if the given input has a valid x/y component.
 *
 * @param       {Mixed}  check
 * @return      {Boolean}
 */
function _isValidPoint(check) {
  if (typeof check === 'undefined' || typeof check === null) {
    return false;
  }

  if (typeof check['x'] !== 'number' || typeof check['y'] !== 'number') {
    return false;
  }

  return true;
}

/**
 * Check if the given input is a valid x/y component or a number.
 *
 * @param       {Mixed}  check
 * @return      {Boolean}
 */
function _isPointOrNumber(check) {
  return _isValidPoint(check) || typeof check === 'number';
}

/**
 * Check if the given input is a valid Vector2.
 *
 * @param       {Mixed}  check
 * @return      {Boolean}
 */
function _isValidVector2(check) {
  return typeof check === 'object' && check['ringerType'] === 'Vector2';
}

/**
 * Add value A to value B, write the output to a Vector2.
 *
 * @param {Vector2} store Vector2 to store the result.
 * @param {Vector2 || Number} a
 * @param {Vector2 || Number} b
 */
function _add(store, a, b) {
  if (!_isValidVector2(store)) {
    throw new Error('Invalid "store" argument for Vector2 add operation.');
  }

  if (!_isPointOrNumber(a)) {
    throw new Error('Invalid "a" argument for Vector2 add operation.');
  }

  if (!_isPointOrNumber(b)) {
    throw new Error('Invalid "b" argument for Vector2 add operation.');
  }

  let newX = 0;
  let newY = 0;

  function execute(arg) {
    if (typeof arg === 'number') {
      newX += arg;
      newY += arg;
    } else if (_isValidPoint(arg)) {
      newX += arg.x;
      newY += arg.y;
    } else {
      throw new Error('Bad argument for Vector2 add operation.');
    }
  }

  execute(a);
  execute(b);

  store.x = newX;
  store.y = newY;

  return store;
}

/**
 * Subtract a value from a vector, write the output to a Vector2.
 *
 * @param {Vector2} store Vector2 to store the result.
 * @param {Vector2} target
 * @param {Vector2 || Number} b
 */
function _subtract(store, target, value) {
  if (!_isValidVector2(store)) {
    throw new Error('Invalid "store" argument for Vector2 subtract operation.');
  }

  if (!_isValidVector2(target)) {
    throw new Error(
      'Invalid "target" argument for Vector2 subtract operation.'
    );
  }

  if (!_isPointOrNumber(value)) {
    throw new Error('Invalid "value" argument for Vector2 subtract operation.');
  }

  let { x: newX, y: newY } = target.clone();

  if (typeof value === 'number') {
    newX -= value;
    newY -= value;
  } else if (_isValidPoint(value)) {
    newX -= value.x;
    newY -= value.y;
  } else {
    throw new Error('Bad argument for Vector2 subtract operation.');
  }

  store.x = newX;
  store.y = newY;

  return store;
}

/**
 * Scale a vector by the given value, write the output to a Vector2.
 *
 * @param       {Vector2} store
 * @param       {Vector2} target
 * @param       {Number} scalar
 * @return      {Vector2}
 */
function _scale(store, target, scalar) {
  if (!_isValidVector2(store)) {
    throw new Error('Invalid "store" argument for Vector2 scale operation.');
  }

  if (!_isValidVector2(target)) {
    throw new Error('Invalid "target" argument for Vector2 scale operation.');
  }

  if (typeof scalar !== 'number') {
    throw new Error('Invalid "scalar" argument for Vector2 scale operation.');
  }

  const operation = target.clone();
  operation.x *= scalar;
  operation.y *= scalar;

  store.x = operation.x;
  store.y = operation.y;

  return store;
}

/**
 * Multiply two vectors to get the Hadamard product,
 * write the output to a Vector2.
 *
 * @param       {Vector2} store
 * @param       {Vector2} a
 * @param       {Vector2} b
 * @return      {Vector2}
 */
function _multiply(store, a, b) {
  if (!_isValidVector2(store)) {
    throw new Error('Invalid "store" argument for Vector2 multiply operation.');
  }

  if (!_isValidVector2(a)) {
    if (typeof a === 'number') {
      throw new Error(
        'Invalid "a" argument for Vector2 multiply operation. Were you looking for ".scale"?'
      );
    }

    throw new Error('Invalid "a" argument for Vector2 multiply operation.');
  }

  if (!_isValidVector2(b)) {
    if (typeof b === 'number') {
      throw new Error(
        'Invalid "b" argument for Vector2 multiply operation. Were you looking for ".scale"?'
      );
    }

    throw new Error('Invalid "b" argument for Vector2 multiply operation.');
  }

  const operation = a.clone();
  operation.x *= b.x;
  operation.y *= b.y;

  store.x = operation.x;
  store.y = operation.y;

  return store;
}

/**
 * Divide a Vector2 by another Vector2 or Number,
 * write the output to a Vector2.
 *
 * @param       {Vector2} store
 * @param       {Vector2} targe
 * @param       {Vector2 || Number} value
 * @return      {Vector2}
 */
function _divide(store, target, value) {
  if (!_isValidVector2(store)) {
    throw new Error('Invalid "store" argument for Vector2 divide operation.');
  }

  if (!_isValidVector2(target)) {
    throw new Error('Invalid "target" argument for Vector2 divide operation.');
  }

  if (!_isPointOrNumber(value)) {
    throw new Error('Invalid "value" argument for Vector2 divide operation.');
  }

  let { x: newX, y: newY } = target.clone();

  if (typeof value === 'number') {
    newX /= value;
    newY /= value;
  } else if (_isValidPoint(value)) {
    newX /= value.x;
    newY /= value.y;
  } else {
    throw new Error('Bad argument for Vector2 divide operation.');
  }

  store.x = newX;
  store.y = newY;

  return store;
}

/**
 * Create a new Vector2. Defaults to x = 0, y = 0.
 *
 * Specify x & y.
 * @param       {Number} x
 * @param       {Number} y
 *
 * Specify Vector2.
 * @param       {Vector2} vector
 *
 * @return      {Vector2}
 */
function Vector2(...args) {
  let initialX = 0;
  let initialY = 0;

  if (args.length) {
    if (_isValidPoint(args[0])) {
      initialX = args[0]['x'];
      initialY = args[0]['y'];
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      initialX = args[0];
      initialY = args[1];
    }
  }

  const container = {
    ringerType: 'Vector2',
    x: initialX,
    y: initialY,

    /**
     * Add a value to this vector.
     *
     * @param {Vector2 || Number} value
     * @return {Vector2}
     */
    add: (value) => _add(container, container, value),

    /**
     * Clone the vector and return a new Vector2.
     *
     * @return {Vector2}
     */
    clone: () => Vector2(container.x, container.y),

    /**
     * Divide this vector by another Vector2 or a number.
     *
     * @param  {Vector2 || Number} value
     * @return {Vector2}
     */
    divide: (value) => _divide(container, container, value),

    /**
     * Multiply this vector with another Vector2
     * to get the Hadamard product.
     *
     * @param  {Vector2} vector
     * @return {Vector2}
     */
    multiply: (vector) => _multiply(container, container, vector),

    /**
     * Scale this vector by the given value.
     *
     * @param  {Number} scalar
     * @return {Vector2}
     */
    scale: (scalar) => _scale(container, container, scalar),

    /**
     * Subtract a value from this vector.
     *
     * @param  {Vector2 || Number} value
     * @return {Vector2}
     */
    subtract: (value) => _subtract(container, container, value),

    /**
     * Convert this vector to an array.
     *
     * @return {Array}
     */
    toArray: () => [container.x, container.y],

    /**
     * Convert this vector to a JSON string.
     *
     * @return {String}
     */
    toJSON: () =>
      JSON.stringify({
        x: container.x,
        y: container.y,
      }),
  };

  return container;
}

/**
 * Add two values together and return a new Vector2.
 *
 * @param {Vector2 || Number} a
 * @param {Vector2 || Number} b
 * @return {Vector2}
 */
Vector2.add = (a, b) => _add(Vector2(), a, b);

/**
 * Divide a vector by another vector or a numberr
 * and write the result to a new Vector2.
 *
 * @param  {Vector2} a
 * @param  {Vector2 || Number} b
 * @return {Vector2}
 */
Vector2.divide = (a, b) => _divide(Vector2(), a, b);

/**
 * Converts an array representing an x/y point into
 * a Vector2 instance.
 *
 * @param  {Array} point
 * @return {Vector2}
 */
Vector2.fromArray = (point) => Vector2(point[0], point[1]);

/**
 * Convert a JSON string or object representation
 * of a Vector2 into a Vector2 instance.
 *
 * @param  {String|Object} input
 * @return {Vector2}
 */
Vector2.fromJSON = (input) =>
  typeof input === 'string'
    ? new Vector2(JSON.parse(input))
    : new Vector2(input);

/**
 * Multiply two vectors together to get the Hadamard product,
 * write the result to a new Vector2.
 *
 * @param  {Vector2} a
 * @param  {Vector2} b
 * @return {Vector2}
 */
Vector2.multiply = (a, b) => _multiply(Vector2(), a, b);

/**
 * Scale a Vector2 by a given value.
 *
 * @param  {Vector2} target
 * @param  {Number} scalar
 * @return {Vector2}
 */
Vector2.scale = (target, scalar) => _scale(Vector2(), target, scalar);

/**
 * Subtract a value from a vector and return a new Vector2.
 *
 * @param  {Vector2} target
 * @param  {Vector2 || Number} value
 * @return {Vector2}
 */
Vector2.subtract = (target, value) => _subtract(Vector2(), target, value);

export default Vector2;
