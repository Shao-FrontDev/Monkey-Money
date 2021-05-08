import Layout from "components/Layout";
import { useRecords, RecordItem } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import { CategorySection } from "./Money/CategorySection";
import { today } from "../lib/getToday";
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

const Header = styled.section`
  background: #e2e2e2;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

export default function Tags() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();

  const hash: { [k: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(
    (r) => r.category === category
  );

  selectedRecords.forEach((r) => {
    const key =
      day(r.createdAt).format("YYYY年MM月DD") === today()
        ? "今天"
        : day(r.createdAt).format("YYYY年MM月DD");

    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const arr = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  console.log(arr);

  return (
    <Layout>
      <CategorySection
        value={category}
        onChange={(value) => setCategory(value)}
      ></CategorySection>

      {arr.map(([date, records]) => (
        <div>
          <Header>{date}</Header>
          <div>
            {records.map((r) => {
              return (
                <Item>
                  <div className='tags'>
                    {r.tagIds.map((tagId) => (
                      <span key={tagId}>
                        {getName(tagId)}
                      </span>
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
        </div>
      ))}

      <div></div>
    </Layout>
  );
}
