// Email перевірка
export const validateEmail = (value: string): string | null => {
  if (!value.trim()) return "Поле не може бути пустим";
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(value)) return "Невірний формат email";
  return null;
};

// Пароль перевірка
export const validatePassword = (value: string): string | null => {
  if (!value.trim()) return "Пароль не може бути пустим";
  if (value.length < 6) return "Пароль має бути мінімум 6 символів";
  if (!/[A-Z]/.test(value)) return "Пароль має містити хоча б одну велику літеру";
  if (!/[0-9]/.test(value)) return "Пароль має містити хоча б одну цифру";
  return null;
};

// Загальна функція (можна під різні кейси)
export const requiredField = (value: string): string | null => {
  return value.trim() ? null : "Це поле обовʼязкове";
};
