# mr.ringer

Mr. Ringer is a Javascript math library that makes it simple to perform complex math for 3D games.

🚧 This library is a work in progress 🚧

- **Clean, expressive syntax**
- **Zero dependencies**
- **Permits functional and object oriented coding styles**
- **Documented for math and coding beginners in mind**

## Installation

Install with npm,

```
$ npm install mr.ringer

import { Vector2 } from 'mr.ringer';
```

Or reference standalone,

```
<script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>

const { Vector2 } = window['mr.ringer'];
```

## Documentation

See the [documentation website](https://itsjoekent.github.io/mr.ringer/) for usage instructions.

## Design Considerations

1. Explicit names. There is a convention among popular math libraries to abbreviate everything which is not helpful for beginners.

2. Static and object oriented functions. Both can be helpful in different situations.

3. No unnecessary parameters. Some popular math libraries ask you to create an empty container and pass that as a third argument for a math operation to "store" the result. This creates confusing code that is likely to have bugs.

4. Chain operations. No need to define placeholders or make awkward application code to run multiple operations against the same data.

5. Throw useful errors. All error messages intentionally thrown have clear validation messaging.

6. Document and test every function. Developers should not be left guessing what a function does or what parameters it accepts. All functions have automated testing behind them to ensure stability.

## Contributing

Check out the [contributing guide](./CONTRIBUTING.md) for information on how to run the project locally and submit a pull request.
