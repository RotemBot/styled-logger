export interface ILogger {
    debug: (message?: string, ...optionalParams: any[]) => void
    info: (message?: string, ...optionalParams: any[]) => void
    warn: (message?: string, ...optionalParams: any[]) => void
    error: (message?: string, ...optionalParams: any[]) => void
}

enum ConsoleStyle {
    Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",

    FgBlack = "\x1b[30m",
    FgRed = "\x1b[31m",
    FgGreen = "\x1b[32m",
    FgYellow = "\x1b[33m",
    FgBlue = "\x1b[34m",
    FgMagenta = "\x1b[35m",
    FgCyan = "\x1b[36m",
    FgGray = "\x1b[37m",

    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgGray = "\x1b[47m",
}

const colorize = (text: string, color: ConsoleStyle): string => {
    return `${color}${text}${ConsoleStyle.Reset}`
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'
enum LogLevelEnum {
    debug = 1,
    info,
    warn,
    error,
}

interface LoggerConfig {
    minLogLevel?: LogLevel
}


export const loggerGenerator = (name: string, config?: LoggerConfig): ILogger => {
    const minLogLevel = config?.minLogLevel ? LogLevelEnum[config.minLogLevel] : LogLevelEnum.debug

    const _getPrefix = (level: LogLevel): string => {
        let levelColor: ConsoleStyle
        switch (level) {
            case 'debug':
                levelColor = ConsoleStyle.FgMagenta
                break
            case 'info':
                levelColor = ConsoleStyle.FgCyan
                break
            case 'warn':
                levelColor = ConsoleStyle.FgYellow
                break
            case 'error':
                levelColor = ConsoleStyle.FgRed
                break
            default:
                levelColor = ConsoleStyle.Bright
        }

        return `${colorize(`[${new Date().toLocaleString('en-GB')}]`, ConsoleStyle.FgGray)} ${colorize(level.toUpperCase(), levelColor)} | [${colorize(name.toUpperCase(), ConsoleStyle.Bright)}] ${ConsoleStyle.FgBlue}`
    }

    const debug = (message?: string, ...optionalParams: any[]) => {
        if (LogLevelEnum.debug >= minLogLevel) {
            message = message ?? ''
            console.debug(_getPrefix('debug'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams)
        }
    }

    const info = (message?: string, ...optionalParams: any[]) => {
        if (LogLevelEnum.info >= minLogLevel) {
            message = message ?? ''
            console.info(_getPrefix('info'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams)
        }
    }

    const warn = (message?: string, ...optionalParams: any[]) => {
        if (LogLevelEnum.warn >= minLogLevel) {
            message = message ?? ''
            console.warn(_getPrefix('warn'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams)
        }
    }

    const error = (message?: string, ...optionalParams: any[]) => {
        if (LogLevelEnum.error >= minLogLevel) {
            message = message ?? ''
            console.error(_getPrefix('error'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams)
        }
    }

    return {
        debug,
        info,
        warn,
        error
    }
}