const jwt = require("jsonwebtoken");
const dotenv = reuqire("dotenv");
dotenv.config();

const ensureAuthorization = (req, res) => {
  try {
    const receivedJwt = req.headers("authorization");
    console.log("received jwt : ", receivedJwt);

    const decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
    console.log("decodedJwt : ", decodedJwt);

    return decodedJwt;
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
    return err;
  }
};

module.exports = ensureAuthorization;
