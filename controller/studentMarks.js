
const candidate = require('../models/studentDetails');

const studentDetailsPost = async(req,res)=>{
    try{
       const studentPost = new candidate(req.body);
       console.log(req.body);
            const stud  = await studentPost.save();
            res.status(201).send(stud);
  
           }catch(e){
                res.status(400).send(e);
           }
}


// get the data of candidate
const candidateData = async(req,res)=>{
    try{
         const  getCandidate = await candidate.find({});
        res.send(getCandidate);
    }catch(e){
             res.send(400).send(e);
    }
}


module.exports ={
    studentDetailsPost, candidateData
}