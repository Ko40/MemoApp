import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'd/M/yyyy HH:mm:ss');
}

export function translateErrors(code) {
  const error = { title: 'Error', description: 'Please try again later.' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'This email address is not vaild.';
      break;
    case 'auth/user-disabled':
      error.description = 'This user is disabled.';
      break;
    case 'auth/user-not-found':
      error.description = 'There is not this user in this app.';
      break;
    case 'auth/wrong-password':
      error.description = 'This is a wrong password.';
      break;
    case 'auth/email-already-in-use':
      error.description = 'This user already exists.';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'This user or password accounts are not valid.';
      break;
    case 'auth/weak-password':
      error.description = 'You need to set up the stronger password.';
      break;
    default:
  }
  return error;
}
