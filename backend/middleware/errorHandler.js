// export function errorHandler(err,req,res,next){console.error(err);res.status(500).json({message:'Unable to process your request right now. Please try again later.'});}


export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    message: 'Unable to process your request right now. Please try again later.'
  });
}