import './config/dotenv'

import Server from './config/server'

const PORT = process.env.PORT || 3000

Server.listen(PORT, () => console.log(`backend is runnig in port ${PORT}`) )