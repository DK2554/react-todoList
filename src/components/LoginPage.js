import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }
  
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 24px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 20%;
  left: 0;
  position: absolute;
`;

const LoginHead = styled.h2`
  text-align: center;
`;
const StyledButton = styled.button`
  /* 공통 스타일 */

  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

function LoginPage() {
  const history = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleInputId = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const handleInputPw = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  // login 버튼 클릭 이벤트

  // const dispatch = useLoginDispatch();

  const onClickLogin = (e) => {
    if (id === "" || id === null || id === undefined) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (pwd === null || pwd === undefined || pwd === "") {
      alert("패스워드를 입력해주세요");
      return;
    }
    onSubmit(e, id, pwd);
  };
  const onSubmit = (e, id, pwd) => {
    e.preventDefault();
    console.log(id);
    console.log(pwd);
    console.log("전송");
    history("/main");
  };
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <LoginHead>로그인</LoginHead>
            <Input
              autoFocus
              placeholder="ID"
              type="text"
              onChange={handleInputId}
            ></Input>
            <Input
              autoFocus
              placeholder="PASSWORD"
              type="password"
              onChange={handleInputPw}
              autoComplete="on"
            ></Input>
            <StyledButton type="submit" onClick={onClickLogin}>
              로그인
            </StyledButton>
          </InsertForm>
        </InsertFormPositioner>
      </TodoTemplate>
    </>
  );
}

export default LoginPage;
