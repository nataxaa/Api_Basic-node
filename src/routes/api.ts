import {Router} from 'express'
import multer from 'multer'
import * as apiController from '../controllers/apiControllers'

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp')
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random()*9999999)
        cb(null, `${randomName + Date.now()}.jpg`)
    }
})

const upload = multer({
    dest: './tmp' ,
    fileFilter: (req, file, cb) => {
        const allowed : string[] =['image/jpg', 'image/jpeg', 'image/png']
        cb(null, allowed.includes(file.mimetype))
    }

})

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

router.post('/upload', upload.single('avatar'), apiController.uploadFile)



export default router
