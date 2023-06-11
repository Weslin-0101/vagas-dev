import { Router } from 'express'
import { makeAddUserInfoController } from '../factories/controllers/add-user-info/add-user-info-controller-factory'
import { adaptRoute } from '../adapters'
import { makeGetUserInfoController } from '../factories/controllers/get-user/get-user-info-controller.factory'
import { makeDeleteUserByNameController } from '../factories/controllers/delete-user-by-name/delete-user-by-name-controller.factory'

const router = Router()

router.post("/users", adaptRoute(makeAddUserInfoController()))
router.get("/users/:name", adaptRoute(makeGetUserInfoController()))
router.delete("/users/:name", adaptRoute(makeDeleteUserByNameController()))

export default router