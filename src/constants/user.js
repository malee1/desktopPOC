/*
This file is used to set the user of the POC
One user is permitted at a time, ensure only one user is uncommented
The uncommented user is exported and set in the redux store as the current user of the app
*/

// initial user
const user = {
  fileId: '123456'
};

// business =unit =gamma user
// const user = {
//   fileId: '234567'
// };

// supervisor user
// const user = {
//   fileId: '345678'
// };

// accessibility user
// const user = {
//   fileId: '567890'
// };

export default user;
