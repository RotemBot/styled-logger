import {ILogger, loggerGenerator, LogLevel} from './src'

const mockConsole = <T extends keyof Console>(type: T): (() => void) => {
    const original = console[type]
    console[type] = jest.fn() as unknown as Console[T]
    return () => {
        console[type] = original
    }
}


describe('loggerGenerator', () => {
    let logger: ILogger
    const loggerName = 'TestLogger'

    beforeEach(() => {
        logger = loggerGenerator(loggerName)
    })

    it('should create a logger with the provided name', () => {
        expect(logger).toBeTruthy()
    })

    const logLevels: LogLevel[] = ['debug', 'info', 'warn', 'error']

    logLevels.forEach((level) => {
        describe(`${level}`, () => {
            test(`should log a ${level} message with optional params`, () => {
                const restoreConsole = mockConsole(level)
                logger = loggerGenerator(loggerName)

                const message = `${level.charAt(0).toUpperCase() + level.slice(1)} message`
                const optionalParam = { key: 'value' }

                // Call the logger function based on the current log level
                logger[level](message, optionalParam)

                expect(console[level]).toHaveBeenCalledWith(
                    expect.stringContaining(loggerName.toUpperCase()),
                    expect.stringContaining(message),
                    optionalParam
                )
                restoreConsole()
            })
        })
    })
})
