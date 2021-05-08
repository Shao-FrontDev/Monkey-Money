import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import { CategorySection } from "./Money/CategorySection";
import day from "dayjs";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 16px;
  > .note {
    margin-left: 12px;
    margin-right: auto;
    color: grey;
    font-size: 14px;
  }
`;

export default function Tags() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  return (
    <Layout>
      <CategorySection
        value={category}
        onChange={(value) => setCategory(value)}
      ></CategorySection>
      <div>
        {records.map((r) => {
          return (
            <Item>
              <div className='tags'>
                {r.tagIds.map((tagId) => (
                  <span>{getName(tagId)}</span>
                ))}
              </div>
              {r.note && (
                <div className='note'>{r.note}</div>
              )}
              <div className='amount'>￥{r.amount}</div>

              {/* {day(r.createdAt).format("YYYY年MM月DD日")} */}
            </Item>
          );
        })}
      </div>
    </Layout>
  );
}
