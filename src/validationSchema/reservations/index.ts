import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  user_id: yup.string().nullable(),
  product_id: yup.string().nullable(),
});
