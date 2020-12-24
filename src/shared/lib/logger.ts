import * as logger from 'js-logger'

logger.setHandler(logger.createDefaultHandler())
if (process.env.NODE_ENV === 'development') {
  logger.setLevel(logger.TRACE)
} else {
  logger.setLevel(logger.OFF)
}

export default logger
