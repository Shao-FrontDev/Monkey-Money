import Layout from "components/Layout";
import React, { useState } from "react";
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

export default function Money() {
  const [selected, setSelected] = useState({
    tagIDs: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });

  type Selected = typeof selected;

  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };

  return (
    <MyLayout>
      <TagsSection
        value={selected.tagIDs}
        onChange={(tagIDs) => onChange({ tagIDs })}
      ></TagsSection>
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      ></NoteSection>
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      ></CategorySection>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={() => {}}
      ></NumberPadSection>
    </MyLayout>
  );
}
