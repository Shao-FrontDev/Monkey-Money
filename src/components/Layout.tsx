import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  /* border: 1px solid green; */
  flex-grow: 1;
  overflow: auto;
`;

// type Props = {
//   name: string;
// };

export default function Layout(props: any) {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
}
