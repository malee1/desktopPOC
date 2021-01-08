/*
This file is used to set the user of the POC - one user is permitted at a time, ensure only one user is uncommented and that user
is exported and set in the redux store as the current user - all role profiles and bolt ons are set to null
*/

// initial user
const user = {
  fileId: '123456',
  roleProfile: null,
  boltOn: null
};

// business =unit =gamma user
// const user = {
//   fileId: '234567',
//   roleProfile: null,
//   boltOn: null
// };

// supervisor user
// const user = {
//   fileId: '345678',
//   roleProfile: null,
//   boltOn: null
// };

// additional skillset user
// const user = {
//   fileId: '456789',
//   roleProfile: null,
//   boltOn: null
// };

// accessibility user
// const user = {
//   fileId: '567890',
//   roleProfile: null,
//   boltOn: null
// };

export default user;
