"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGenerator = void 0;
var ConsoleStyle;
(function (ConsoleStyle) {
    ConsoleStyle["Reset"] = "\u001B[0m";
    ConsoleStyle["Bright"] = "\u001B[1m";
    ConsoleStyle["Dim"] = "\u001B[2m";
    ConsoleStyle["Underscore"] = "\u001B[4m";
    ConsoleStyle["Blink"] = "\u001B[5m";
    ConsoleStyle["Reverse"] = "\u001B[7m";
    ConsoleStyle["Hidden"] = "\u001B[8m";
    ConsoleStyle["FgBlack"] = "\u001B[30m";
    ConsoleStyle["FgRed"] = "\u001B[31m";
    ConsoleStyle["FgGreen"] = "\u001B[32m";
    ConsoleStyle["FgYellow"] = "\u001B[33m";
    ConsoleStyle["FgBlue"] = "\u001B[34m";
    ConsoleStyle["FgMagenta"] = "\u001B[35m";
    ConsoleStyle["FgCyan"] = "\u001B[36m";
    ConsoleStyle["FgGray"] = "\u001B[37m";
    ConsoleStyle["BgBlack"] = "\u001B[40m";
    ConsoleStyle["BgRed"] = "\u001B[41m";
    ConsoleStyle["BgGreen"] = "\u001B[42m";
    ConsoleStyle["BgYellow"] = "\u001B[43m";
    ConsoleStyle["BgBlue"] = "\u001B[44m";
    ConsoleStyle["BgMagenta"] = "\u001B[45m";
    ConsoleStyle["BgCyan"] = "\u001B[46m";
    ConsoleStyle["BgGray"] = "\u001B[47m";
})(ConsoleStyle || (ConsoleStyle = {}));
const colorize = (text, color) => {
    return `${color}${text}${ConsoleStyle.Reset}`;
};
var LogLevelEnum;
(function (LogLevelEnum) {
    LogLevelEnum[LogLevelEnum["debug"] = 1] = "debug";
    LogLevelEnum[LogLevelEnum["info"] = 2] = "info";
    LogLevelEnum[LogLevelEnum["warn"] = 3] = "warn";
    LogLevelEnum[LogLevelEnum["error"] = 4] = "error";
})(LogLevelEnum || (LogLevelEnum = {}));
const loggerGenerator = (name, config) => {
    const minLogLevel = (config === null || config === void 0 ? void 0 : config.minLogLevel) ? LogLevelEnum[config.minLogLevel] : LogLevelEnum.debug;
    const _getPrefix = (level) => {
        let levelColor;
        switch (level) {
            case 'debug':
                levelColor = ConsoleStyle.FgMagenta;
                break;
            case 'info':
                levelColor = ConsoleStyle.FgCyan;
                break;
            case 'warn':
                levelColor = ConsoleStyle.FgYellow;
                break;
            case 'error':
                levelColor = ConsoleStyle.FgRed;
                break;
            default:
                levelColor = ConsoleStyle.Bright;
        }
        return `${colorize(`[${new Date().toLocaleString('en-GB')}]`, ConsoleStyle.FgGray)} ${colorize(level.toUpperCase(), levelColor)} | [${colorize(name.toUpperCase(), ConsoleStyle.Bright)}] ${ConsoleStyle.FgBlue}`;
    };
    const debug = (message, ...optionalParams) => {
        if (LogLevelEnum.debug >= minLogLevel) {
            message = message !== null && message !== void 0 ? message : '';
            console.debug(_getPrefix('debug'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams);
        }
    };
    const info = (message, ...optionalParams) => {
        if (LogLevelEnum.info >= minLogLevel) {
            message = message !== null && message !== void 0 ? message : '';
            console.info(_getPrefix('info'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams);
        }
    };
    const warn = (message, ...optionalParams) => {
        if (LogLevelEnum.warn >= minLogLevel) {
            message = message !== null && message !== void 0 ? message : '';
            console.warn(_getPrefix('warn'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams);
        }
    };
    const error = (message, ...optionalParams) => {
        if (LogLevelEnum.error >= minLogLevel) {
            message = message !== null && message !== void 0 ? message : '';
            console.error(_getPrefix('error'), colorize(message, ConsoleStyle.FgBlue) + ConsoleStyle.Reset, ...optionalParams);
        }
    };
    return {
        debug,
        info,
        warn,
        error
    };
};
exports.loggerGenerator = loggerGenerator;
