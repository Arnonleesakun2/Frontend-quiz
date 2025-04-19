import { Radio } from "antd";
import { Controller, Control } from "react-hook-form";
import style from "./formgender.module.scss";
type Props = {
  name: string;
  defaultValue?: string;
  control: any;
  errors: any;
  label: string;
};
const FormGender = ({ name, defaultValue, control, errors, label }: Props) => {
  return (
    <div className={style.formgender}>
      <label htmlFor={name}>
        *<span>{label}</span>
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div>
            <Radio.Group {...field}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="unisex">Unisex</Radio>
            </Radio.Group>
            <div>
              {errors[name] && (
                <div className={style.error}>
                  {errors[name]?.message as string}
                </div>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FormGender;
