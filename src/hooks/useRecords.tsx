import { useState } from "react";
import { useUpdate } from "./useUpdate";
import { useEffect } from "react";

type newRecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
};

type RecordItem = newRecordItem & { createdAt: string };

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(
      JSON.parse(
        window.localStorage.getItem("records") || "[]"
      )
    );
  }, []);

  const addRecord = (newRecord: newRecordItem) => {
    const record = {
      ...newRecord,
      createdAt: new Date().toISOString(),
    };
    setRecords([...records, record]);
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
