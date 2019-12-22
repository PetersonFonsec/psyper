import { config } from 'dotenv'

const path = process.env.NODE_ENV === 'development' ? 'src/.env' : 'src/.env.test'

config({ path })