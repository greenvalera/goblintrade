import * as Yup from "yup";

const name =  Yup.string()
  .min(2, 'Минимум 2 символа')
  .max(50, 'Максимум 50 символов');

const firstName = name.clone().required('Укажите Имя');
const lastName = name.clone().required('Укажите фамилию');
const email = Yup.string().email('Не верный формат email').required('Укажите email');
const password = Yup.string()
  .min(6, 'Минимум 6 символов')
  .max(50, 'Максимум 50 символов')
  .required('Укажите пароль');

const registerSchema = Yup.object().shape({
  firstName: firstName,
  lastName: lastName,
  email: email,
  password: password,
});

const loginSchema = Yup.object().shape({
  email: email,
  password: password,
});

export { registerSchema, loginSchema };