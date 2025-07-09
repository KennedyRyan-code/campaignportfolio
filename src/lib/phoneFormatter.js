export const formatPhoneNumber = (value) => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");

  // Format as Kenyan phone number
  if (digits.startsWith("254")) {
    return digits.slice(0, 12);
  } else if (digits.startsWith("0")) {
    return digits.slice(0, 10);
  } else if (digits.startsWith("7") || digits.startsWith("1")) {
    return digits.slice(0, 9);
  }
  return digits.slice(0, 10);
};

export const validatePhoneNumber = (phoneNumber) => {
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Kenyan phone number validation
  if (cleanNumber.startsWith("254")) {
    return cleanNumber.length === 12;
  } else if (cleanNumber.startsWith("0")) {
    return cleanNumber.length === 10;
  } else if (cleanNumber.startsWith("7") || cleanNumber.startsWith("1")) {
    return cleanNumber.length === 9;
  }

  return false;
};
