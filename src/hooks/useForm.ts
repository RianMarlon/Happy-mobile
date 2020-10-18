import { useState, ChangeEvent } from 'react';

function useForm(initialState: any) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});

  function updateField(field: string, value: any) {
    const newForm = {...form};
    const newErrors = { ...errors };
    
    newForm[field] = value;
    newErrors[field] = false;

    setForm({...newForm});
    setErrors({...newErrors});
  }

  function updateForm(obj: any) {
    setForm({ ...obj });
  }

  function validateFields() {
    const newErrors: any = {};
    
    Object.entries(form).forEach(([field, value]) => {
      const isEmpty = typeof value === 'string' ? !value.trim() : !value;
      newErrors[field] = isEmpty;
    });
    
    setErrors({
      ...newErrors
    });
  }
  
  function hasOneFieldEmpty() {
    const hasFieldEmpty = (value: any) => !value.trim();
    return Object.values(form).some(hasFieldEmpty);
  }

  return [
    form, updateField, 
    updateForm, validateFields, 
    errors, hasOneFieldEmpty,
  ]
}

export default useForm;
