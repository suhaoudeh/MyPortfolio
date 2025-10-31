import jwt from 'jsonwebtoken';
import config from '../../config/config.js';


const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization? req.headers.authorization.split(" ")[1] : null;

    if(!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"});
    }
}

 export default authMiddleware;

// import jwt from 'jsonwebtoken';
// import config from '../../config/config.js';  // ✅ use the same config file

// const authMiddleware = (req, res, next) => {
//   const tokenHeader = req.header('Authorization');
//   const token = tokenHeader ? tokenHeader.split(" ")[1] : null;

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized: No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, config.jwtSecret); // ✅ consistent secret
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error("❌ Token verification failed:", error.message);
//     return res.status(401).json({ message: "Invalid Token" });
//   }
// };

// export default authMiddleware;
