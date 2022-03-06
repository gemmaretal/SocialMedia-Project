import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
 
  border-radius: 25px;
  background-color: white !important;

element.style {
  border-radius: 25px !important;
  background-color: white !important;
}
`;
export default function ProfileImage() {
  return (
    <StyledImage
      src={`/IconImage.png`}
      alt="Picture of the author"
      width={60}
      height={60}
    />
  );
}
