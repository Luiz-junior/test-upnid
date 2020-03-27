import styled from 'styled-components';

export const Label = styled.label`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const InputText = styled.input`
  border: none;
  height: 40px;
  margin: 10px 0px;
  border-radius: 5px;
  outline: none;
  padding-left: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #777;

  &::placeholder {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  height: 40px;
  background: #42a5f5;
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: ease-in-out .4s;  
  border-radius: 5px;

  &:hover {
    background: #fff;
    border: 1px solid #42a5f5;
    color: #42a5f5;
  }

  &:active {
    transform: translateY(4px);
  }
`;

export const BtnControl = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #42a5f5;
  color: #fff;
  font-weight: bold;
  outline: none;

  .img-arrow-left {
    height: 30px;
    padding-right: 5px;
  }

  .img-arrow-right {
    height: 30px;
    padding-left: 5px;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const BtnMenu = styled.button`
  border: none;
  border-bottom: 1px solid #ddd;
  height: 40px;
  width: 50px;
  background: #fff;
  color: #42a5f5;
  font-weight: bold;
  outline: none;
  margin-bottom: 15px;

  &:active {
    transform: translateY(4px);
  }
`;

