import { Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { StateProp } from "@/store/slices/userSlice";
import { useTranslation } from "react-i18next";

type TableColumnsProps = {
  onEdit: (record: StateProp) => void;
  onDelete: (record: StateProp) => void;
};

const useTableColumns = ({ onEdit, onDelete }: TableColumnsProps): ColumnsType<StateProp> => {
  const { t } = useTranslation("table");

  return [
    {
      title: t("column1"),
      render: (_, record) =>
        `${record.title} ${record.firstname} ${record.lastname}`,
    },
    {
      title: t("column2"),
      dataIndex: "gender",
      render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
    },
    {
      title: t("column3"),
      render: (_, record) => `${record.phone.code} ${record.phone.number}`,
    },
    {
      title: t("column4"),
      dataIndex: "nationality",
      render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
    },
    {
      title: t("column5"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => onEdit(record)}>{t("edit")}</Button>
          <Button onClick={() => onDelete(record)}>{t("delete")}</Button>
        </Space>
      ),
    },
  ];
};

export default useTableColumns;