import React from "react";
import styled from "styled-components";

const ImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ImageProps = {
  source: string;
  styles?: React.CSSProperties;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ source, styles, alt }) => {
  return (
    <>
      <ImageTag src={source} style={styles && styles} alt={alt} />
    </>
  );
};

export default Image;
