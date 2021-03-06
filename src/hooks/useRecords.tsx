import { useState } from "react";
import { useUpdate } from "./useUpdate";
import { useEffect } from "react";

type newRecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
};

export type RecordItem = newRecordItem & {
  createdAt: string;
};

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(
      JSON.parse(
        window.localStorage.getItem("records") || "[]"
      )
    );
  }, []);

  const addRecord = (newRecord: newRecordItem): boolean => {
    if (newRecord.amount <= 0) {
      alert("请输入金额");
      return false;
    }

    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }

    const record = {
      ...newRecord,
      createdAt: new Date().toISOString(),
    };
    setRecords([...records, record]);
    return true;
  };

  useUpdate(() => {
    window.localStorage.setItem(
      "records",
      JSON.stringify(records)
    );
  }, [records]);

  return {
    records,
    addRecord,
  };
};
