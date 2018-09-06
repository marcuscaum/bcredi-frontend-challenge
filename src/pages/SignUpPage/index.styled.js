import styled from 'styled-components';
import SignUpImage from 'assets/signup_page_image.png';

export const MainLayout = styled.div`
  display: flex;
`;

export const SideImage = styled.div`
  display: flex;
  height: 100vh;
  width: 845px;
  background-size: cover;
  background-image: url('${SignUpImage}');
`;

export const FormContainer = styled.div`
  display: flex;
`;
