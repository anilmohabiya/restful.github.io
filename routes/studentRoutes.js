
const express = require('express');
const { studentDetailsPost, candidateData} = require('../controller/studentMarks');
const router = new express.Router();


//post data
router.post('/candidate', studentDetailsPost)
router.get('/candidate', candidateData)


module.exports = router;