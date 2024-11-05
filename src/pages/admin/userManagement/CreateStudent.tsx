import { FieldValues, SubmitHandler } from "react-hook-form";
import NexusForm from "../../../components/form/NexusForm";
import NexusInput from "../../../components/form/NexusInput";
import { Button, Col, Divider, Row } from "antd";

const studentMockData = {
  student: {
    name: {
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
    },
    gender: "male",
    dateOfBirth: "2000-05-15",
    email: "john2.smith@example.com",
    contactNo: "+1234567890",
    emergencyContactNo: "+0987654321",
    bloodGroup: "A+",
    presentAddress: "123 Main St, New York, NY",
    permanentAddress: "456 Maple Rd, Brooklyn, NY",
    guardian: {
      fatherName: "Robert Smith",
      fatherOccupation: "Engineer",
      fatherContactNo: "+11234567890",
      motherName: "Jane Smith",
      motherOccupation: "Teacher",
      motherContactNo: "+10987654321",
    },
    localGuardian: {
      name: "Michael Johnson",
      occupation: "Doctor",
      contactNo: "+13456789012",
      address: "789 Elm St, Queens, NY",
    },
    admissionSemester: "66eac8a7909ec3a96b2893c4",
    profileImg: "https://example.com/profile/john_smith.jpg",
    academicDepartment: "66ea9500f1f9aed19c01a88f",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    //!This is only for developer logging purpose
    console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <NexusForm onSubmit={onSubmit}>
          <Divider>Student Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 8 }}>
              <NexusInput
                type="text"
                name="name.firstName"
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 8 }}>
              <NexusInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 8 }}>
              <NexusInput type="text" name="name.lastName" label="Last Name" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </NexusForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
