import styled from 'styled-components';
import CheckImage from '../../assets/check.svg';

export const CheckboxLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  line-height: 1.67;
  cursor: pointer;
  overflow-wrap: normal;
  float: left;
  margin-left: 35px;
  align-self: center;
  display: flex;

  a {
    text-decoration: none;
    color: ${({ theme: { primary } }) => primary};
  }

  &::before {
    box-sizing: border-box;
    margin: 0 12px;
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 4px;
    position: absolute;
    background-color: white;
    border: 1px solid #cccccc;
    left: 0;
    top: 16px;
  }
`;

export const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  &:checked + ${CheckboxLabel}::before {
    content: url('${CheckImage}');
    background-color: ${({ theme: { primary } }) => primary};
    border: none;
    box-sizing: border-box;
    padding: 2px 7px;
  }
`;

export const CheckboxContainer = styled.div`
  position: relative;
  border: 1px solid ${({ theme: { ultraLightGray } }) => ultraLightGray};
  padding: 7px 12px;
  border-radius: 3px;
  height: 40px;
  display: block;
`;
