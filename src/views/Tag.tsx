import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useTags } from "useTags";

type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const Label = styled.label`
  margin-top: 10px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 14px;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: 70px;
    background: none;
    border: none;
  }
`;

const Tag: React.FC = (props) => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon name="" />
      </Topbar>
      <div>
        <Label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </Label>
      </div>
      <Center>
        <Space></Space>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export default Tag;
