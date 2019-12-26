import Auth from "../services/Auth"
import { Router, Response, Request } from "express"

const router = Router()

router.post( "/login", Auth.login )

router.post( "/validToken", Auth.login,
    ( req:Request, res:Response ) => res.status(200).send() 
)

export default router