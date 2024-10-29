import { Button, Col, Flex } from "antd";
import NexusForm from "../../../components/form/NexusForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import NexusSelect from "../../../components/form/NexusSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  const nameOptions = [
    { value: "Autumn", label: "Autumn" },
    { value: "Summer", label: "Summer" },
    { value: "Fall", label: "Fall" },
  ];
  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <NexusForm onSubmit={onSubmit}>
          <NexusSelect label="Name" name="Name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </NexusForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
