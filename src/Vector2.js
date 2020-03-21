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
 * One of the arguments must be a Vector2.
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
     * Add a value to this Vector2.
     *
     * @param {Vector2 || Number} value
     */
    add: (value) => _add(container, container, value),
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
Vector2.add = (a, b) => _add(new Vector2(), a, b);

export default Vector2;
