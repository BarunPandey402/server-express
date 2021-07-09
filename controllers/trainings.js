// @desc  Get All Trainings
// @route GET /api/v1/tainings
// @access Public
exports.getTrainings = (req,res,next) =>{
    res.status(200).json({success : true, msg : "show all trainings"})
}

exports.createTraining = (req,res,next) =>{
    res.status(200).json({success : true, msg : "new training created"})
}

exports.getTraining = (req,res,next) =>{
    res.status(200).json({success : true, msg : `show particular trainings with id ${req.params.id}`})
}

exports.updateTrainings = (req,res,next) =>{
    res.status(200).json({success : true, msg : "update all trainings"})
}

exports.updateTraining = (req,res,next) =>{
    res.status(200).json({success : true, msg : `update particular trainings with id ${req.params.id}`})
}

exports.deleteTraining = (req,res,next) =>{
    res.status(200).json({success : true, msg : `delete particular trainings with id ${req.params.id}`})
}