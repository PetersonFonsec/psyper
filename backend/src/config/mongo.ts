 import { connect, connection } from 'mongoose'

connect(process.env.DB_LINK ,{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
 })

connection.on("open", () => console.log("conectado ao mongodb"))

connection.on("error", ( err: Error ) => console.log(err) )