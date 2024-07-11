// src/components/DomainForm.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface DomainFormProps {
  onSubmit: (domain: string) => void;
}

interface FormValues {
  domain: string;
}

const schema = yup.object().shape({
  domain: yup
    .string()
    .required('Domain name is required')
    .matches(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid domain name'),
});

const DomainForm: React.FC<DomainFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data.domain);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap mb-4">
      <div className="flex flex-row  items-center gap-2">
        <input
          type="text"
          {...register('domain')}
          placeholder="Enter domain name"
          className={`p-2 border border-gray-300 rounded ${errors.domain ? 'border-red-500' : ''}`}
        />
       
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
      >
        Lookup
      </button>
      </div>
      {errors.domain && <span className="text-red-500">{errors.domain.message}</span>}
    </form>
  );
};

export default DomainForm;
