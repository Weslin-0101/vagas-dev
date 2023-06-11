import { Router } from 'express'
import { makeAddUserInfoController } from '../factories/controllers/add-user-info/add-user-info-controller-factory'
import { adaptRoute } from '../adapters'

export default (router: Router): void => {
    router.post("/users", adaptRoute(makeAddUserInfoController()))
}