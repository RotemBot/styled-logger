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
const loggerGenerator = (name) => {
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
        return `${ConsoleStyle.FgGray}[${new Date().toLocaleString('en-GB')}]${ConsoleStyle.Reset}`
            + ` ${levelColor}${level.toUpperCase()}${ConsoleStyle.Reset}`
            + ` | [${ConsoleStyle.Bright}${name.toUpperCase()}${ConsoleStyle.Reset}] ${ConsoleStyle.FgBlue}`;
    };
    const debug = (message, ...optionalParams) => {
        console.debug(_getPrefix('debug'), message + ConsoleStyle.Reset, ...optionalParams);
    };
    const info = (message, ...optionalParams) => {
        console.info(_getPrefix('info'), message + ConsoleStyle.Reset, ...optionalParams);
    };
    const warn = (message, ...optionalParams) => {
        console.warn(_getPrefix('warn'), message + ConsoleStyle.Reset, ...optionalParams);
    };
    const error = (message, ...optionalParams) => {
        console.error(_getPrefix('error'), message + ConsoleStyle.Reset, ...optionalParams);
    };
    return {
        debug,
        info,
        warn,
        error
    };
};
exports.loggerGenerator = loggerGenerator;
