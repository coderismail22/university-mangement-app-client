import { Button, Col, Flex } from "antd";
import NexusForm from "../../../components/form/NexusForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import NexusSelect from "../../../components/form/NexusSelect";
import { nameOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../validationSchemas/academicSemesterManagement.schema";


const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };
    console.log(semesterData);
  };



  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <NexusForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <NexusSelect label="Name" name="name" options={nameOptions} />
          <NexusSelect label="Year" name="year" options={yearOptions} />
          <NexusSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <NexusSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </NexusForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
