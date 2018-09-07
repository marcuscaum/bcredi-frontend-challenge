import styled from 'styled-components';
import SignUpImage from 'assets/signup_page_image.png';

export const MessageContainer = styled.div`
  display: flex;
  flex-flow: row-reverse;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0) 17%,
    rgba(0, 0, 0, 0) 44%,
    rgba(0, 0, 0, 0.5) 72%,
    rgba(0, 0, 0, 0.8)
  );
`;

export const MessageBox = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  margin: 0 40px 40px 0;
  width: 370px;
  color: white;
  text-align: right;
  line-height: 1.5;
`;

export const MessageContent = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const MessageAuthor = styled.p`
  font-size: 16px;
  margin: 0;
  margin-top: 8px;
`;

export const SideImage = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 550px;
  background-size: cover;
  background-position: center center;
  background-image: url('${SignUpImage}');
`;
