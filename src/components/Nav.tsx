import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
// import x from "icons/tags.svg"; //  sygo-loader => svg-sprite-loader
// import y from "icons/money.svg"; //  sygo-loader => svg-sprite-loader
// import z from "icons/statistics.svg"; //  sygo-loader => svg-sprite-loader

// console.log(x, y, z);  // 如果不使用log，会被优化掉使用不了。

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: rgb(151, 19, 19);
          font-weight: bold;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            activeClassName="selected"
          >
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
