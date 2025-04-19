import { Radio } from "antd";
import style from "./formgender.module.scss";
import { Controller, Control, FieldErrors } from "react-hook-form";

type Props = {
  name: string;
  control: Control<any>;
  errors: FieldErrors;
  label: string;
};

const FormGender = ({ name, control, errors, label }: Props) => {
  return (
    <div className={style.formgender}>
      <label htmlFor={name}>
        *<span>{label}:</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Radio.Group {...field}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="unisex">Unisex</Radio>
          </Radio.Group>
        )}
      />
      {errors[name] && (
        <div className={style.error}>{errors[name]?.message as string}</div>
      )}
    </div>
  );
};

export default FormGender;
