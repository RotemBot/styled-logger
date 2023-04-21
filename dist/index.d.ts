export interface ILogger {
    debug: (message?: string, ...optionalParams: any[]) => void;
    info: (message?: string, ...optionalParams: any[]) => void;
    warn: (message?: string, ...optionalParams: any[]) => void;
    error: (message?: string, ...optionalParams: any[]) => void;
}
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
interface LoggerConfig {
    minLogLevel?: LogLevel;
}
export declare const loggerGenerator: (name: string, config?: LoggerConfig) => ILogger;
export {};
