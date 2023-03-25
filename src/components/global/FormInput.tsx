import { Field, FieldAttributes } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';

interface FormInputProps extends InputProps {
  name: string;
  label: string;
}

const FormInput = ({ name, label, ...rest }: FormInputProps) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldAttributes<any>) => (
        <FormControl isInvalid={errors[name] && touched[name]}>
          <FormLabel mb="1" htmlFor={name}>
            {label}
          </FormLabel>

          <Input id={name} borderRadius="base" {...rest} {...field} />

          <FormErrorMessage>{errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormInput;
