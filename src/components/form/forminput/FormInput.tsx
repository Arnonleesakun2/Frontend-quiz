import { Input } from "antd";
import style from "./form.module.scss";
import { Controller, Control, FieldErrors } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  defaultValue?: string;
  control: Control<any>;
  errors: FieldErrors;
  label: string;
};

const FormInput = ({ name, type, defaultValue, control, errors, label }: Props) => {
  return (
    <div className={style.forminput}>
      <label htmlFor={name}>
        *<span>{label}:</span>
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <>
            <div className="">
              <Input {...field} type={type} />
              <div className="">
                {errors[name] && (
                  <div className={style.error}>
                    {errors[name]?.message as string}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
