import {Router} from 'express'
import * as apiController from '../controllers/apiControllers'


const router = Router()

router.get('/ping', apiController.ping)
router.get('/random', apiController.random)
router.get('/name/:name', apiController.name)

router.post('/frases', apiController.createPhrase)
router.get('/frases', apiController.listPhrases)
router.get('/frases/aleatoria', apiController.randomPhrase)
router.get('/frases/:id', apiController.getPhrase)
router.put('/frases/:id', apiController.updatePhrase)
router.delete('/frases/:id', apiController.deletePhrase)
export default router
