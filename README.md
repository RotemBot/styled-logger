# styled-logger

`styled-logger` is a simple, yet powerful, customizable logging 
library for Node.js applications. It provides colored console 
output and adjustable log levels.

## Installation

Using npm:

```bash
npm install styled-logger
```
Using yarn:
```bash
yarn add styled-logger
```

## Usage
Import the `loggerGenerator` function from the `styled-logger` package and create a logger instance:

```js
import { loggerGenerator } from 'styled-logger'

const logger = loggerGenerator('App')
```

Use the logger instance to log messages with different log levels:

```js
logger.debug('Debug message')
logger.info('Info message')
logger.warn('Warning message')
logger.error('Error message')
```

## Adjusting log level
You can set the minimum log level by passing a `minLogLevel` property in the configuration object when creating a new logger:
```js
import { loggerGenerator } from 'styled-logger'

const infoLogger = loggerGenerator('InfoApp', { minLogLevel: 'info' })

infoLogger.debug('This message will not be logged')
infoLogger.info('Info message')
```

## License
[MIT](https://choosealicense.com/licenses/mit/)