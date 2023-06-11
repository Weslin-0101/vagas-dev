import { Router } from 'express'
import { makeAddUserInfoController } from '../factories/controllers/add-user-info/add-user-info-controller-factory'
import { adaptRoute } from '../adapters'

const router = Router()

router.post("/users", adaptRoute(makeAddUserInfoController()))

export default router