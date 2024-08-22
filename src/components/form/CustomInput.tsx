import { useFormContext } from "react-hook-form";

const CustomInput = ({ name, type, placeholder }) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(name)}
      name={name}
      type={type}
      style={{ width: "50%", height: "30px", padding: "10px" }}
      placeholder={placeholder}
    ></input>
  );
};

export default CustomInput;
