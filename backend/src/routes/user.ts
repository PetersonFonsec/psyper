import Auth from "../services/Auth"
import User from "../services/user"
import { Router } from "express"

const router = Router()

router.get( "/user", Auth.validToken, User.findAll )

router.post( "/user", User.create )

router.put( "/user/:id", Auth.validToken, User.update )

router.delete( "/user/:id", Auth.validToken, User.delete )

export default router