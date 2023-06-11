import { Router } from 'express'
import { makeAddUserInfoController } from '../factories/controllers/add-user-info/add-user-info-controller-factory'
import { adaptRoute } from '../adapters'
import { makeGetUserInfoController } from '../factories/controllers/get-user/get-user-info-controller.factory'

const router = Router()

router.post("/users", adaptRoute(makeAddUserInfoController()))
router.get("/users/:name", adaptRoute(makeGetUserInfoController()))

export default router