import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  date: yup.date().required(),
  product_id: yup.string().nullable(),
});
