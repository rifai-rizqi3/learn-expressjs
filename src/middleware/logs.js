const logRequest = (req, res, next) => {
  console.log("Terjadi request ke PATH: ", req.path);
  next(); // request untuk lanjut
};

module.exports = logRequest;
