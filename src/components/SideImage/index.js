import React from 'react';
import PropTypes from 'prop-types';

import {
  SideImage,
  MessageContainer,
  MessageBox,
  MessageContent,
  MessageAuthor,
} from './index.styled';

const SideImageComponent = ({ message, messageAuthor }) => (
  <SideImage>
    <MessageContainer>
      <MessageBox>
        <MessageContent>{message}</MessageContent>
        <MessageAuthor>{messageAuthor}</MessageAuthor>
      </MessageBox>
    </MessageContainer>
  </SideImage>
);

SideImageComponent.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  messageAuthor: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default SideImageComponent;
