"use client";
import styles from "./Navhome.module.scss";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const Navhome = () => {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    const lang = value.toLowerCase();
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={styles.nav}>
      <Select
        defaultValue={i18n.language === "th" ? "TH" : "EN"}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "EN", label: "EN" },
          { value: "TH", label: "ไทย" },
        ]}
      />
    </nav>
  );
};

export default Navhome;
