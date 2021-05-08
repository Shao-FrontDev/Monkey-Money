import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = "-" | "+";

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};

export default function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const { addRecord } = useRecords();
  type Selected = typeof selected;

  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };

  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
    }
    setSelected(defaultFormData);
  };
  return (
    <MyLayout>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      ></TagsSection>
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      ></NoteSection>
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        ></CategorySection>
      </CategoryWrapper>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      ></NumberPadSection>
    </MyLayout>
  );
}
