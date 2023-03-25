import AddItemButton from 'components/fridge/AddItemButton';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useAddFridgeItemsMutation } from 'redux/services/fridge';
import { addItemSchema } from 'validators/fridgeSchemas';

const AddItemContainer = () => {
  const [addItem, { data, isLoading, isSuccess }] = useAddFridgeItemsMutation();

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    <Formik
      initialValues={{ name: '', quantity: 0, date: null }}
      onSubmit={addItem}
      validationSchema={addItemSchema}
    >
      <AddItemButton isLoading={isLoading} isSuccess={isSuccess} />
    </Formik>
  );
};

export default AddItemContainer;
