import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
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
  }
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  const note = props.value;
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
      console.log(note);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };
