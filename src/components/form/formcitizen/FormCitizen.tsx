import { Form, Input, InputRef } from "antd";
import { useRef, useEffect, useState } from "react";
import style from "./formcitizen.module.scss";
import React from "react";
import type { UseFormSetValue } from "react-hook-form";

type Props = {
  name: string;
  setValue: UseFormSetValue<any>;
  errors: any;
  label: string;
  defaultValue?: string;  
};
const FormCitizen = ({ name, setValue, errors, label, defaultValue }: Props) => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  const inputRefs = [
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
  ];
  useEffect(() => {
    if (defaultValue) {
      const values = defaultValue.split('-');
      setInputValues(values);
    }
  }, [defaultValue]);
  const clearInputs = () => {
    setInputValues(['', '', '', '', '']);
    setValue(name, '');
  };
  useEffect(() => {
    const handleReset = () => {
      clearInputs();
    };
    window.addEventListener('form-reset', handleReset);
    return () => window.removeEventListener('form-reset', handleReset);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      return;
    }
    const maxLengths = [1, 4, 5, 2, 1];
    if (value.length <= maxLengths[index]) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);
      const combinedValue = newInputValues.join("-");
      setValue(name, combinedValue);
      if (value.length >= maxLengths[index] && index < 4) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !inputValues[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };
  return (
    <div className={style.formcitizen}>
      <label htmlFor="citizen">
        <span>{label}</span>
      </label>
      <Form.Item required>
        <div className={style.citizenGroup}>
          {[1, 4, 5, 2, 1].map((len, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className={style.separator}>-</span>}
              <Input
                ref={inputRefs[index]}
                value={inputValues[index]}
                maxLength={len}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={style.citizenInput}
              />
            </React.Fragment>
          ))}
        </div>
        <div>
          {errors[name] && (
            <div className={style.error}>{errors[name]?.message as string}</div>
          )}
        </div>
      </Form.Item>
    </div>
  );
};

export default FormCitizen;
