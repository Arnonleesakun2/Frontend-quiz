"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Table } from "antd";
import { useAppDispatch } from "@/store/store";
import { deleteUser, StateProp, setEditData } from "@/store/slices/userSlice";
import { useEffect, useState, useMemo } from "react";
import DeleteButton from "./DeleteButton";
import useTableColumns from "./TableColumns";
import useTableConfig from "./useTableConfig";

const FormTable = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedRows, setSelectedRows] = useState<StateProp[]>([]);
  const userData = useSelector((state: RootState) => state.useReducer.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleEdit = (record: StateProp) => {
    dispatch(setEditData(record));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDelete = (record: StateProp) => {
    dispatch(deleteUser(record.citizenId));
  };
  const handleDeleteSelected = () => {
    selectedRows.forEach((record) => {
      dispatch(deleteUser(record.citizenId));
    });
    setSelectedRows([]);
  };
  const rowSelection = useMemo(() => ({
    onChange: (_: React.Key[], selectedRows: StateProp[]) => {
      setSelectedRows(selectedRows);
    },
    selectedRowKeys: selectedRows.map((row) => row.citizenId),
  }), [selectedRows]);
  const columns = useTableColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  const tableConfig = useTableConfig({
    rowSelection,
  });
  if (!mounted) return null;
  return (
    <div style={{ margin: "20px" }}>
      <DeleteButton
        selectedCount={selectedRows.length}
        onDelete={handleDeleteSelected}
      />
      <Table
        {...tableConfig}
        columns={columns}
        dataSource={userData}
        rowKey={(record) => record.citizenId}
      />
    </div>
  );
};

export default FormTable;

