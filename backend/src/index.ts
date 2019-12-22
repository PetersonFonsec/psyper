import './server/dotenv'

import Server from './server/server'

const PORT = process.env.PORT || 3000

Server.listen(PORT, () => console.log(`backend is runnig in port ${PORT}`) )