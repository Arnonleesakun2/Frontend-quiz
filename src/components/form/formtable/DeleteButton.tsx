import { Button } from "antd";
import { useTranslation } from "react-i18next";

type DeleteButtonProps = {
  selectedCount: number;
  onDelete: () => void;
};

const DeleteButton = ({ selectedCount, onDelete }: DeleteButtonProps) => {
  const { t } = useTranslation("table");
  
  return (
    <div style={{ marginBottom: "16px" }}>
      <Button
        onClick={onDelete}
        disabled={selectedCount === 0}
      >
        {t("delete")}
        {selectedCount > 0 && ` (${selectedCount})`}
      </Button>
    </div>
  );
};

export default DeleteButton;