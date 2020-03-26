/**
 * @typedef Vector3
 * @type {String} ringerType
 * @type {Number} x
 * @type {Number} y
 * @type {Function} add
 * @type {Function} clone
 * @type {Function} divide
 * @type {Function} dot
 * @type {Function} magnitude
 * @type {Function} multiply
 * @type {Function} normalize
 * @type {Function} scale
 * @type {Function} subtract
 * @type {Function} toArray
 * @type {Function} toJSON
 */

/**
 * Check if the given input has a valid x/y/z component.
 *
 * @param  {Mixed}  check
 * @return {Boolean}
 */
function _isValid3DPoint(check) {
  if (typeof check === 'undefined' || typeof check === null) {
    return false;
  }

  if (
    typeof check['x'] !== 'number' ||
    typeof check['y'] !== 'number' ||
    typeof check['z'] !== 'number'
  ) {
    return false;
  }

  return true;
}

/**
 * Check if the given input is a valid x/y/z component or a number.
 *
 * @param  {Mixed}  check
 * @return {Boolean}
 */
function _is3DPointOrNumber(check) {
  return _isValid3DPoint(check) || typeof check === 'number';
}

/**
 * Check if the given input is a valid Vector3.
 *
 * @param  {Mixed}  check
 * @return {Boolean}
 */
function _isValidVector3(check) {
  return typeof check === 'object' && check['ringerType'] === 'Vector3';
}

/**
 * Add value A to value B, write the output to a Vector3.
 *
 * @param  {Vector3} store Vector3 to store the result.
 * @param  {Vector3 || Number} a
 * @param  {Vector3 || Number} b
 * @return {Vector3}
 */
function _add(store, a, b) {
  if (!_isValidVector3(store)) {
    throw new Error('Invalid "store" argument for Vector3 add operation.');
  }

  if (!_is3DPointOrNumber(a)) {
    throw new Error('Invalid "a" argument for Vector3 add operation.');
  }

  if (!_is3DPointOrNumber(b)) {
    throw new Error('Invalid "b" argument for Vector3 add operation.');
  }

  let newX = 0;
  let newY = 0;
  let newX = 0;

  function execute(arg) {
    if (typeof arg === 'number') {
      newX += arg;
      newY += arg;
      newZ += arg;
    } else if (_isValid3DPoint(arg)) {
      newX += arg.x;
      newY += arg.y;
      newZ += arg.z;
    } else {
      throw new Error('Bad argument for Vector3 add operation.');
    }
  }

  execute(a);
  execute(b);

  store.x = newX;
  store.y = newY;
  store.z = newZ;

  return store;
}

/**
 * Subtract a value from a vector, write the output to a Vector3.
 *
 * @param  {Vector3} store Vector3 to store the result.
 * @param  {Vector3} target
 * @param  {Vector3 || Number} b
 * @return {Vector3}
 */
function _subtract(store, target, value) {
  if (!_isValidVector3(store)) {
    throw new Error('Invalid "store" argument for Vector3 subtract operation.');
  }

  if (!_isValidVector3(target)) {
    throw new Error(
      'Invalid "target" argument for Vector3 subtract operation.'
    );
  }

  if (!_is3DPointOrNumber(value)) {
    throw new Error('Invalid "value" argument for Vector3 subtract operation.');
  }

  let { x: newX, y: newY, z: newZ } = target.clone();

  if (typeof value === 'number') {
    newX -= value;
    newY -= value;
    newZ -= value;
  } else if (_isValid3DPoint(value)) {
    newX -= value.x;
    newY -= value.y;
    newZ -= value.z;
  } else {
    throw new Error('Bad argument for Vector3 subtract operation.');
  }

  store.x = newX;
  store.y = newY;
  store.z = newZ;

  return store;
}

/**
 * Scale a vector by the given value, write the output to a Vector3.
 *
 * @param  {Vector3} store
 * @param  {Vector3} target
 * @param  {Number} scalar
 * @return {Vector3}
 */
function _scale(store, target, scalar) {
  if (!_isValidVector3(store)) {
    throw new Error('Invalid "store" argument for Vector3 scale operation.');
  }

  if (!_isValidVector3(target)) {
    throw new Error('Invalid "target" argument for Vector3 scale operation.');
  }

  if (typeof scalar !== 'number') {
    throw new Error('Invalid "scalar" argument for Vector3 scale operation.');
  }

  const operation = target.clone();
  operation.x *= scalar;
  operation.y *= scalar;
  operation.z *= scalar;

  store.x = operation.x;
  store.y = operation.y;
  store.z = operation.z;

  return store;
}

/**
 * Multiply two vectors to get the Hadamard product,
 * write the output to a Vector3.
 *
 * @param  {Vector3} store
 * @param  {Vector3} a
 * @param  {Vector3} b
 * @return {Vector3}
 */
function _multiply(store, a, b) {
  if (!_isValidVector3(store)) {
    throw new Error('Invalid "store" argument for Vector3 multiply operation.');
  }

  if (!_isValidVector3(a)) {
    if (typeof a === 'number') {
      throw new Error(
        'Invalid "a" argument for Vector3 multiply operation. Were you looking for ".scale"?'
      );
    }

    throw new Error('Invalid "a" argument for Vector3 multiply operation.');
  }

  if (!_isValidVector3(b)) {
    if (typeof b === 'number') {
      throw new Error(
        'Invalid "b" argument for Vector3 multiply operation. Were you looking for ".scale"?'
      );
    }

    throw new Error('Invalid "b" argument for Vector3 multiply operation.');
  }

  const operation = a.clone();
  operation.x *= b.x;
  operation.y *= b.y;
  operation.z *= b.z;

  store.x = operation.x;
  store.y = operation.y;
  store.z = operation.z;

  return store;
}

/**
 * Divide a Vector3 by another Vector3 or Number,
 * write the output to a Vector3.
 *
 * @param  {Vector3} store
 * @param  {Vector3} targe
 * @param  {Vector3 || Number} value
 * @return {Vector3}
 */
function _divide(store, target, value) {
  if (!_isValidVector3(store)) {
    throw new Error('Invalid "store" argument for Vector3 divide operation.');
  }

  if (!_isValidVector3(target)) {
    throw new Error('Invalid "target" argument for Vector3 divide operation.');
  }

  if (!_is3DPointOrNumber(value)) {
    throw new Error('Invalid "value" argument for Vector3 divide operation.');
  }

  let { x: newX, y: newY, newZ: z } = target.clone();

  if (typeof value === 'number') {
    newX /= value;
    newY /= value;
    newZ /= value;
  } else if (_isValid3DPoint(value)) {
    newX /= value.x;
    newY /= value.y;
    newZ /= value.z;
  } else {
    throw new Error('Bad argument for Vector3 divide operation.');
  }

  store.x = newX;
  store.y = newY;
  store.z = newZ;

  return store;
}

/**
 * Get the magnitude of a given vector.
 *
 * @param  {Vector3} vector
 * @return {Number}
 */
function _magnitude(vector) {
  if (!_isValidVector3(vector)) {
    throw new Error(
      'Invalid "vector" argument for Vector3 magnitude operation.'
    );
  }

  const { x, y, z } = vector;
  const magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

  return magnitude;
}

/**
 * Normalize a vector and write the result to a Vector3.
 *
 * @param  {Vector3} store
 * @param  {Vector3} vector
 * @return {Vector3}
 */
function _normalize(store, vector) {
  if (!_isValidVector3(store)) {
    throw new Error(
      'Invalid "store" argument for Vector3 normalize operation.'
    );
  }

  if (!_isValidVector3(vector)) {
    throw new Error(
      'Invalid "vector" argument for Vector3 normalize operation.'
    );
  }

  const magnitude = _magnitude(vector);

  if (magnitude === 0) {
    return vector;
  }

  return _divide(store, vector, magnitude);
}

/**
 * Get the dot product of two vectors.
 *
 * @param  {Vector3} a
 * @param  {Vector3} b
 * @return {Number}
 */
function _dot(a, b) {
  if (!_isValidVector3(a)) {
    throw new Error('Invalid "a" argument for Vector3 dot product operation.');
  }

  if (!_isValidVector3(b)) {
    throw new Error('Invalid "b" argument for Vector3 dot product operation.');
  }

  const dot = a.x * b.x + a.y * b.y + a.z * b.z;
  return dot;
}

/**
 * Create a new Vector3. Defaults to x = 0, y = 0.
 *
 * Specify x & y.
 * @param  {Number} x
 * @param  {Number} y
 *
 * Specify Vector3.
 * @param  {Vector3} vector
 *
 * @return {Vector3}
 */
function Vector3(...args) {
  let initialX = 0;
  let initialY = 0;
  let initialZ = 0;

  if (args.length) {
    if (_isValid3DPoint(args[0])) {
      initialX = args[0]['x'];
      initialY = args[0]['y'];
      initialZ = args[0]['z'];
    } else if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      initialX = args[0];
      initialY = args[1];
      initialZ = args[2];
    }
  }

  const container = {
    ringerType: 'Vector3',
    x: initialX,
    y: initialY,
    z: initialZ,

    /**
     * Add a value to this vector.
     *
     * @param {Vector3 || Number} value
     * @return {Vector3}
     */
    add: (value) => _add(container, container, value),

    /**
     * Clone the vector and return a new Vector3.
     *
     * @return {Vector3}
     */
    clone: () => Vector3(container.x, container.y, container.z),

    /**
     * Divide this vector by another Vector3 or a number.
     *
     * @param  {Vector3 || Number} value
     * @return {Vector3}
     */
    divide: (value) => _divide(container, container, value),

    /**
     * Get the dot product of this vector and another vector.
     *
     * @param  {Vector3} vector
     * @return {Number}
     */
    dot: (vector) => _dot(container, vector),

    /**
     * Get the magnitude of this vector.
     *
     * @return {Number}
     */
    magnitude: () => _magnitude(container),

    /**
     * Multiply this vector with another Vector3
     * to get the Hadamard product.
     *
     * @param  {Vector3} vector
     * @return {Vector3}
     */
    multiply: (vector) => _multiply(container, container, vector),

    /**
     * Normalize this vector.
     *
     * @return {Vector3}
     */
    normalize: () => _normalize(container, container),

    /**
     * Scale this vector by the given value.
     *
     * @param  {Number} scalar
     * @return {Vector3}
     */
    scale: (scalar) => _scale(container, container, scalar),

    /**
     * Subtract a value from this vector.
     *
     * @param  {Vector3 || Number} value
     * @return {Vector3}
     */
    subtract: (value) => _subtract(container, container, value),

    /**
     * Convert this vector to an array.
     *
     * @return {Array}
     */
    toArray: () => [container.x, container.y, container.z],

    /**
     * Convert this vector to a JSON string.
     *
     * @return {String}
     */
    toJSON: () =>
      JSON.stringify({
        x: container.x,
        y: container.y,
        z: container.z,
      }),
  };

  return container;
}

/**
 * Add two values together and return a new Vector3.
 *
 * @param  {Vector3 || Number} a
 * @param  {Vector3 || Number} b
 * @return {Vector3}
 */
Vector3.add = (a, b) => _add(Vector3(), a, b);

/**
 * Get the dot product of two vectors.
 *
 * @param  {Vector3} a
 * @param  {Vector3} b
 * @return {Number}
 */
Vector3.dot = (a, b) => _dot(a, b);

/**
 * Divide a vector by another vector or a numberr
 * and write the result to a new Vector3.
 *
 * @param  {Vector3} a
 * @param  {Vector3 || Number} b
 * @return {Vector3}
 */
Vector3.divide = (a, b) => _divide(Vector3(), a, b);

/**
 * Converts an array representing an x/y point into
 * a Vector3 instance.
 *
 * @param  {Array} point
 * @return {Vector3}
 */
Vector3.fromArray = (point) => Vector3(point[0], point[1], point[2]);

/**
 * Convert a JSON string or object representation
 * of a Vector3 into a Vector3 instance.
 *
 * @param  {String|Object} input
 * @return {Vector3}
 */
Vector3.fromJSON = (input) =>
  typeof input === 'string'
    ? new Vector3(JSON.parse(input))
    : new Vector3(input);

/**
 * Multiply two vectors together to get the Hadamard product,
 * write the result to a new Vector3.
 *
 * @param  {Vector3} a
 * @param  {Vector3} b
 * @return {Vector3}
 */
Vector3.multiply = (a, b) => _multiply(Vector3(), a, b);

/**
 * Scale a Vector3 by a given value.
 *
 * @param  {Vector3} target
 * @param  {Number} scalar
 * @return {Vector3}
 */
Vector3.scale = (target, scalar) => _scale(Vector3(), target, scalar);

/**
 * Subtract a value from a vector and return a new Vector3.
 *
 * @param  {Vector3} target
 * @param  {Vector3 || Number} value
 * @return {Vector3}
 */
Vector3.subtract = (target, value) => _subtract(Vector3(), target, value);

Vector3.up = Vector3(0, 1, 0);

Vector3.down = Vector3(0, -1, 0);

Vector3.forward = Vector3(1, 0, 0);

Vector3.backward = Vector3(-1, 0, 0);

Vector3.left = Vector3(0, 0, 1);

Vector3.right = Vector3(0, 0, -1);

Vector3.one = Vector3(1, 1, 1);

Vector3.zero = Vector3(0, 0, 0);

export default Vector3;
