import * as Yup from 'yup';

export const addItemSchema = Yup.object({
  name: Yup.string().required('Required'),
  quantity: Yup.number().required('Required'),
});
