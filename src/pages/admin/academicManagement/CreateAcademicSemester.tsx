import { Button } from "antd";
import CustomInput from "../../../components/form/CustomInput";
import UniversityForm from "../../../components/form/UniversityForm";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <UniversityForm onSubmit={onSubmit}>
        <CustomInput
          type="text"
          name="name"
          label="Name"
          placeholder="Give academic semester name"
        />
        <CustomInput
          type="text"
          name="name"
          label="Name"
          placeholder="Give academic semester name"
        />
        <Button htmlType="submit">Submit</Button>
      </UniversityForm>
    </div>
  );
};

export default CreateAcademicSemester;
