// const jwt = require("jsonwebtoken")

// module.exports = (req, res, next) => {
//     try{
//         const authorization = req.headers.authorization.split(" ")[1]
//         jwt.verify(authorization, "secret")
//         next()
//     }
//     catch (err){
//         res.status(403).json({
//             message : "not authenticated",
//             error : err
//         })
//     }
// }

const Jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      throw Error("Invalid authorization header");
    }
    let decode;
    const token = authHeader?.split(" ")[1];
    decode = Jwt.verify(token, "secret");
    if (!token || !decode) {
      throw Error("Invalid token");
    }
    req.authId = decode.userId;
    req.email = decode.email;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { auth };
