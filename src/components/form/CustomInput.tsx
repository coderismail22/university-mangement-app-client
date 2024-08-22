import { Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({ name, type, placeholder }) => {
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
