import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";

const StyledCol = styled(Col)`
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
  word-break: break-word;
`;
const StyledHeadCol = styled(Col)`
    padding: 16px 16px;
    word-break: break-word;
    background: #fafafa;
    -webkit-transition: background .3s ease;
    transition: background .3s ease;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
`;
const StyledRow = styled(Row)`
  &:hover { background: #f1f8ff; }
`;
const data = Array(1000).fill({ name: "1", size: 1 });
const Items = ({ index, style }) => {
  const item = data[index];
  return (
    <div>
      <StyledCol span={12}>{item.name}</StyledCol>
      <StyledCol span={12}>{item.size}</StyledCol>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Row>
        <Row>
          <StyledHeadCol span={12}>Title</StyledHeadCol>
          <StyledHeadCol span={12}>Size</StyledHeadCol>
        </Row>
        <StyledRow>
          <List width={500} height={300} itemCount={100} itemSize={35}>
            {Items}
          </List>
        </StyledRow>
      </Row>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
