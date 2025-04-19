"use client";

import { useTranslation } from "react-i18next";
import { Card } from "antd";
import style from "./้home.module.scss";
import Link from "next/link";

const Homepage = () => {
  const { t } = useTranslation("home");

  return (
    <div className={style.container}>
      <Link href="/moveshape">
        <Card
          hoverable
          title={t("card1.title")}
          variant="borderless"
          style={{ width: 300 }}
        >
          <p>{t("card1.content")}</p>
        </Card>
      </Link>
      <Link href="/form">
        <Card
          hoverable
          title={t("card2.title")}
          variant="borderless"
          style={{ width: 300 }}
        >
          <p>{t("card2.content")}</p>
        </Card>
      </Link>
    </div>
  );
};

export default Homepage;
