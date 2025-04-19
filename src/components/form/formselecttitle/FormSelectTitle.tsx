import { Select } from "antd";
import { Controller } from "react-hook-form";
import style from "./formselect.module.scss";

type Props = {
  name: string;
  defaultValue?: string;
  control: any;
  errors: any;
  label:string;
};

const FormSelectTitle = ({ name, defaultValue, control, errors,label }: Props) => {
  return (
    <div className={style.formselect}>
      <label htmlFor={name}>
        *<span>{label}</span>
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <div>
            <Select
              {...field}
              style={{ width: 120 }}
              status={errors[name]?.number ? "error" : ""}
              options={[
                { value: "Mr.", label: "Mr." },
                { value: "Mrs.", label: "Mrs." },
                { value: "Ms.", label: "Ms." },
              ]}
              onChange={(value) => field.onChange(value)} // สำคัญมาก!
            />
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

export default FormSelectTitle;
