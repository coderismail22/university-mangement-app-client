import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TOption = { value: string; label: string; disabled?: boolean };
type TNexusSelectProps = { name: string; label: string; options: TOption[] };
const NexusSelect = ({ name, label, options }: TNexusSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select style={{ width: "100%" }} {...field} options={options} />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default NexusSelect;
