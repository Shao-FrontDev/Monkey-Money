import { Button } from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    > a {
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }


`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 32px;
`;

export default function Tags() {
  const { tags } = useTags();

  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
        <Center>
          <Space></Space>
          <Button>新增标签</Button>
        </Center>
      </TagList>
    </Layout>
  );
}
