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

export const loggerGenerator = (name: string): ILogger => {
    const _getPrefix = (level: string): string => {
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

        return `${ConsoleStyle.FgGray}[${new Date().toLocaleString('en-GB')}]${ConsoleStyle.Reset}`
            + ` ${levelColor}${level.toUpperCase()}${ConsoleStyle.Reset}`
            + ` | [${ConsoleStyle.Bright}${name.toUpperCase()}${ConsoleStyle.Reset}] ${ConsoleStyle.FgBlue}`
    }
    const debug = (message?: string, ...optionalParams: any[]) => {
        console.debug(_getPrefix('debug'), message + ConsoleStyle.Reset, ...optionalParams)
    }
    const info = (message?: string, ...optionalParams: any[]) => {
        console.info(_getPrefix('info'), message + ConsoleStyle.Reset, ...optionalParams)
    }
    const warn = (message?: string, ...optionalParams: any[]) => {
        console.warn(_getPrefix('warn'), message + ConsoleStyle.Reset, ...optionalParams)
    }
    const error = (message?: string, ...optionalParams: any[]) => {
        console.error(_getPrefix('error'), message + ConsoleStyle.Reset, ...optionalParams)
    }
    return {
        debug,
        info,
        warn,
        error
    }
}