// @desc  Get All Trainings
// @route GET /api/v1/tainings
// @access Public
/*
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
}*/

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Training = require('../models/Training');

// @desc      Get all trainings
// @route     GET /api/v1/tainings
// @access    Public
exports.getTrainings = asyncHandler(async (req, res, next) => {
    const training = await Training.find();
  res.status(200)
  .json({success : true,count: training.length,data:training});
});

// @desc      Get single training
// @route     GET /api/v1/tainings/:id
// @access    Public
exports.getTraining = asyncHandler(async (req, res, next) => {
  const training = await Training.findById(req.params.id);

  if (!training) {
    return next(
      new ErrorResponse(`training not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: training });
});

// @desc      Create new training
// @route     POST /api/v1/tainings
// @access    Private
exports.createTraining = asyncHandler(async (req, res, next) => {
  const training = await Training.create(req.body);

  res.status(201).json({
    success: true,
    data: training
  });
});

// @desc      Update training
// @route     PUT /api/v1/tainings/:id
// @access    Private
exports.updateTraining = asyncHandler(async (req, res, next) => {
  let training = await Training.findById(req.params.id);

  if (!training) {
    return next(
      new ErrorResponse(`Training not found with id of ${req.params.id}`, 404)
    );
  }


  training = await Training.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: training });
});

// @desc      Delete training
// @route     DELETE /api/v1/tainings/:id
// @access    Private
exports.deleteTraining = asyncHandler(async (req, res, next) => {
  const training = await Training.findById(req.params.id);

  if (!training) {
    return next(
      new ErrorResponse(`Training not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});




