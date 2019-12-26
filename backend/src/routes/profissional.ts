import Auth from "../services/Auth"
import Profissional from "../services/profissional"
import { Router } from "express"

const router = Router()

router.get( "/profissional", Auth.validToken, Profissional.findAll )

router.post( "/profissional", Auth.validToken, Profissional.create )

router.put( "/profissional/:id", Auth.validToken, Profissional.update )

router.delete( "/profissional/:id", Auth.validToken, Profissional.delete )

export default router