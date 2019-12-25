import * as Winston from "winston"
import * as Fs from "fs"

const dirRoot = 'src'

const folder = `${dirRoot}/logs`

if( !Fs.existsSync(folder) ) Fs.mkdirSync(folder)

const logInfo = new Winston.transports.File({  
    filename: `${folder}/log-info.log`,
    maxsize: 10000,
    maxFiles: 10
})
const logError = new Winston.transports.File({  
    filename: `${folder}/log-error.log`,
    maxsize: 10000,
    maxFiles: 10
})

export default Winston.createLogger({
    format: Winston.format.json(),
    level: "info",
    defaultMeta: { service: 'user-service' },
    exceptionHandlers: [ logError ],
    transports: [ logInfo ]
})