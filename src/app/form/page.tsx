"use client";
import FormContainer from "@/components/form/formcontainer/FormContainer";
import FormTable from "@/components/form/formtable/FormTable";
import Header from "@/components/header/Header";
import { useTranslation } from "react-i18next";

const FormPage = () => {
  const { t } = useTranslation("form");
  return (
    <section>
      <Header title={t("title")} label={t("home")} href="/" />
      <FormContainer />
      <FormTable/>
    </section>
  );
};

export default FormPage;
