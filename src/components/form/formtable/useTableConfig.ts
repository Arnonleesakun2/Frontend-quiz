import { StateProp } from "@/store/slices/userSlice";

type TableConfigProps = {
  rowSelection: {
    onChange: (keys: React.Key[], rows: StateProp[]) => void;
    selectedRowKeys: React.Key[];
  };
};

const useTableConfig = ({ rowSelection }: TableConfigProps) => {
  return {
    rowSelection: {
      type: "checkbox" as const,
      ...rowSelection,
    },
    pagination: { pageSize: 3 },
  };
};

export default useTableConfig;
