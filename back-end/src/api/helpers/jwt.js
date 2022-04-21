import jwt from "jsonwebtoken";
require("dotenv").config();

// generate tokens :
export const createToken = (payload = null, role = null) => {
  if (!payload) return null;
  if (!role) return null;
  return jwt.sign(payload, role, {
        expiresIn: "1h",});
};

export const verifyToken = (token = null, role = null) => {
  if (!token) return null;
  if (!role) return null;
  try {
        return jwt.verify(token, role);
    
  } catch (err) {
    return null;
  }
};
