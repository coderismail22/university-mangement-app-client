import { FormProvider, useForm } from "react-hook-form";
const UniversityForm = ({ onSubmit, children, defaultValues }) => {
  const methods = useForm({ defaultValues: defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default UniversityForm;
