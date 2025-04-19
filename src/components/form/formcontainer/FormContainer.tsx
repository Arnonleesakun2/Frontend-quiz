"use client";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormCitizen from "../formcitizen/FormCitizen";
import Formdate from "../formdate/Formdate";
import FormGender from "../formgender/FormGender";
import FormInput from "../forminput/FormInput";
import FormPhone from "../formphone/FormPhone";
import FormSelectNationality from "../formselectnationality/FormSelectNationality";
import FormSelectTitle from "../formselecttitle/FormSelectTitle";
import style from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editUser, setData } from "@/store/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";
import { FormData, formSchema } from "@/utils/schemas/form.schema";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const FormContainer = () => {
  const { t } = useTranslation("form");
  const editData = useSelector((state: RootState) => state.useReducer.editData);
  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (editData) {
      setValue('title', editData.title);
      setValue('firstname', editData.firstname);
      setValue('lastname', editData.lastname);
      setValue('birthday', editData.birthday ? new Date(editData.birthday) : null);
      setValue('nationality', editData.nationality);
      setValue('citizenId', editData.citizenId);
      setValue('gender', editData.gender as "male" | "female" | "unisex");
      setValue('phone.code', editData.phone.code);
      setValue('phone.number', editData.phone.number);
      setValue('passport', editData.passport);
      setValue('expectedSalary', editData.expectedSalary);
    }
  }, [editData, setValue]);
  const hdlsubmit = (data: FormData) => {
    const formattedData = {
      ...data,
      birthday: data.birthday ? data.birthday.toISOString() : null,
    };

    Modal.confirm({
      title: t("confirmTitle"),
      content: editData 
        ? t("confirmEdit") 
        : t("confirmSubmit"),
      okText: t("yes"),
      cancelText: t("no"),
      onOk: () => {
        if (editData) {
          dispatch(editUser(formattedData));
        } else {
          dispatch(setData(formattedData));
        }
        reset();
        window.dispatchEvent(new Event('form-reset'));
        setValue('birthday', null);
        setValue('citizenId', '');
      }
    });
  };
  const hdlreset = () => {
    reset();
    window.dispatchEvent(new Event('form-reset'));
    setValue('birthday', null);
    setValue('citizenId', '');
  };
  return (
    <div className={style.formcontainer}>
      <form onSubmit={handleSubmit(hdlsubmit)}>
        <div className={style.row1}>
          <FormSelectTitle name="title" control={control} errors={errors} label={t("selecttitle")}/>
          <FormInput name="firstname" type="text" control={control} errors={errors} label={t("firstname")}/>
          <FormInput name="lastname" type="text" control={control} errors={errors} label={t("lastname")}/>
        </div>
        <div className={style.row2}>
          <Formdate 
            name="birthday" 
            setValue={setValue} 
            errors={errors} 
            label={t("birthday")}
            defaultValue={editData?.birthday ? new Date(editData.birthday) : null}
          />
          <FormSelectNationality name="nationality" control={control} errors={errors} label={t("nationality")}/>
        </div>
        <div className={style.row3}>
          <FormCitizen 
            name="citizenId" 
            setValue={setValue} 
            errors={errors} 
            label={t("citizenId")}
            defaultValue={editData?.citizenId}
          />
        </div>
        <FormGender name="gender" control={control} errors={errors} label={t("gender")}/>
        <FormPhone name="phone" control={control} errors={errors} label={t("mobilephone")}/>
        <div className={style.row4}>
          <FormInput name="passport" type="number" control={control} errors={errors} label={t("passport")}/>
        </div>
        <div className={style.row5}>
          <FormInput name="expectedSalary" type="number" control={control} errors={errors} label={t("expectedSalary")}/>
          <div className={style.buttoncontainer}>
            <Button onClick={hdlreset}>{t("reset")}</Button>
            <Button htmlType="submit">
            {t("submit")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
