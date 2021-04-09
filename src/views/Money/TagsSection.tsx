import React, { useState } from "react";
import styled from "styled-components";
import { useTags } from "useTags";

const Wrapper = styled.section`
  background: #fff;
  /* border: 1px solid red; */
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f2ac29;
        color: white;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 0 4px;
    border-bottom: 1px solid #666;
    color: #aaa;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTags = props.value;

  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter((t) => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => {
          return (
            <li
              key={tag}
              onClick={() => {
                onToggleTag(tag);
              }}
              className={
                selectedTags.indexOf(tag) >= 0
                  ? "selected"
                  : ""
              }
            >
              {tag}
            </li>
          );
        })}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
