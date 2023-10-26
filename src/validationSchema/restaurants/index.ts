import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
