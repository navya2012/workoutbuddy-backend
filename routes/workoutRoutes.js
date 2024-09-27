
const express = require("express")

const router = express.Router()

const authUser = require("../middleware/userMiddleware")

//controllers
const { getWorkoutData, getWorkoutDataById, createWorkoutData, updateWorkoutData, deleteWorkoutData } = require('../controllers/workoutController')

router.use(authUser)


//get entire data 
router.get('/', getWorkoutData)

//get entire data by id
router.get('/:id', getWorkoutDataById)

//create add
router.post('/newData', createWorkoutData)

//update data
router.patch('/updateData/:id', updateWorkoutData)

//delete data
router.delete('/deleteData/:id?', deleteWorkoutData)


module.exports = router