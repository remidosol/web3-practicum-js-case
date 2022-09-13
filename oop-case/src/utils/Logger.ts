import {
  Logger as WinstonLogger,
  format,
  transports,
  createLogger,
} from 'winston'

/**
 * @class GlobalLogger
 *
 * @description Has been created to print logs as globally
 */
class GlobalLogger {
  private constructor() {
    const { combine, timestamp, prettyPrint, printf, colorize } = format

    const loggerFormat = printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })

    this._globalLogger = () =>
      createLogger({
        transports: [new transports.Console()],
        format: combine(
          timestamp(),
          prettyPrint({ colorize: true, depth: 2 }),
          colorize({ all: true }),
          loggerFormat
        ),
        handleExceptions: true,
      })
  }

  private _globalLogger: () => WinstonLogger

  static _instance: Readonly<GlobalLogger>

  static getInstance() {
    if (this._instance) {
      return this._instance
    }

    this._instance = new GlobalLogger()
    return this._instance
  }

  public globalLogger = () => this._globalLogger
}

GlobalLogger.getInstance()

export const Logger = GlobalLogger.getInstance().globalLogger()()
