import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledPic = styled.div`
  max-width: 300px;
  background-color: var(--green);
  border-radius: var(--border-radius);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }
`;

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <StyledPic>
      <Image src={src} alt={alt} width={300} height={300} layout="intrinsic" />
    </StyledPic>
  );
};

export default ProfileImage;
