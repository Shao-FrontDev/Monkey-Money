import styled from "styled-components";
import { Link } from "react-router-dom";
// import x from "icons/tags.svg"; //  sygo-loader => svg-sprite-loader
// import y from "icons/money.svg"; //  sygo-loader => svg-sprite-loader
// import z from "icons/statistics.svg"; //  sygo-loader => svg-sprite-loader

require("icons/tags.svg");
require("icons/money.svg");
require("icons/statistics.svg");

// console.log(x, y, z);  // 如果不使用log，会被优化掉使用不了。

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tags" />
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
