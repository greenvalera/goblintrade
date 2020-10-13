export function getValidationErrors(error) {
  let validationErrors = {};
  if (!error) return validationErrors;

  switch (error.code) {
    case 'auth/email-already-in-use':
      validationErrors.email = error.message;
      break;
    default:
      validationErrors = {};
  }

  return validationErrors;
}