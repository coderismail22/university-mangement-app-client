import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
};
const CustomInput = ({ name, type, placeholder, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} id={name} type={type} placeholder={placeholder} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
