import { Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  placeholder: string;
};
const CustomInput = ({ name, type, placeholder }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Input {...field} id={name} type={type} placeholder={placeholder} />
      )}
    />
  );
};

export default CustomInput;
