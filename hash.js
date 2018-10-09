const bcrypt = require("bcrypt");
const { MD5 } = require("crypto-js");
const jwt = require("jsonwebtoken");

// bcrypt.genSalt(10, (err, salt) => {
//   if (err) return next(err);

//   bcrypt.hash("password123", salt, (err, hash) => {
//     if (err) return next(err);
//     console.log(hash);
//   });
// });

// //rough example
// const secret = "mysecretpassword";
// const secretSalt = "asdfjkhlkjhsdfasd";

// const user = {
//   id: 1,
//   token: MD5("asdfasdfasdf").toString() + secretSalt
// };

// const receivedToken = "a95c530a7af5f492a74499e70578d150asdfjkhlkjhsdfasd";

// if (receivedToken === user.token) {
//   console.log("move forward");
// }

// console.log(user);

const id = "1000";
const secret = "supersecret";

const receivedToken =
  "eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y";

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);
