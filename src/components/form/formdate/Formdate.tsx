import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import style from "./formdate.module.scss";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

type Props = {
  name: string;
  setValue: any;
  errors: any;
  label: string;
  defaultValue?: Date | null;
};

const Formdate = ({ name, setValue, errors, label, defaultValue }: Props) => {
  const [selectedDate, setSelectedDate] = useState<any>(defaultValue ? dayjs(defaultValue) : null);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedDate(date);
    setValue(name, date?.toDate());
  };
  useEffect(() => {
    if (defaultValue) {
      setSelectedDate(dayjs(defaultValue));
    }
  }, [defaultValue]);
  useEffect(() => {
    const handleReset = () => {
      setSelectedDate(null);
    };

    window.addEventListener("form-reset", handleReset);
    return () => window.removeEventListener("form-reset", handleReset);
  }, []);
  return (
    <div className={style.formdate}>
      <label htmlFor={name}>
        *<span>{label}</span>
      </label>
      <div className="">
        <DatePicker onChange={onChange} value={selectedDate} />
      </div>
      <div className="">
        {errors[name] && (
          <div className={style.error}>{errors[name]?.message as string}</div>
        )}
      </div>
    </div>
  );
};

export default Formdate;
