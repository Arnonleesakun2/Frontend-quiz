import { Controller } from "react-hook-form";
import { Input, Select } from "antd";
import style from "./formphone.module.scss";

type Props = {
  name: string;
  control: any;
  defaultValue?: {
    code: string;
    number: string;
  };
  errors: any;
  label:string;
};

const FormPhone = ({ name, control, defaultValue, errors ,label}: Props) => {
  return (
    <div className={style.formphone}>
      <label htmlFor="phone">
        *<span>{label}</span>
      </label>
      <div className={style.phoneGroup}>
        <Controller
          name={`${name}.code`}
          control={control}
          defaultValue={defaultValue?.code || ""}
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: 100 }}
              options={[
                { value: "+66", label: "🇹🇭 +66" },
                { value: "+33", label: "🇫🇷 +33" },
                { value: "+1", label: "🇺🇸 +1" },
              ]}
            />
          )}
        />

        <Controller
          name={`${name}.number`}
          control={control}
          defaultValue={defaultValue?.number || ""}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              style={{ width: "100%" }}
              maxLength={9}
            />
          )}
        />
      </div>
      {(errors[name]?.code || errors[name]?.number) && (
        <div className={style.error}>
          {errors[name]?.code?.message || errors[name]?.number?.message}
        </div>
      )}
    </div>
  );
};

export default FormPhone;
