import React from "react";
import styled from "styled-components";
import Typography from "styles/typography";
import GeneralButton from "components/GeneralButton";
import Arrow from "components/svgLogos/Arrow";
import Image from "components/ImageComponent";

type FeatureProductProps = {
  title: string;
  name: string;
  description: string;
  productId: string;
  image: string;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;

  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const ProductInfoDiv = styled.div`
  display: flex;
  align-items: flex-start;
  //justify-content: flex-start;
  flex-direction: column;
  height: 80%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
  }
`;
const ProductInfoText = styled.div`
  & > * {
    margin-top: 10px;
  }
`;
const ImageDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
    height: 60%;
    align-self: flex-end;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
    height: 70%;
    align-self: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
    height: 100%;
    align-self: center;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 50px;
  margin-top: 35px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
  }
`;
const ButtonContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 15px;
`;
const ArrowButtonDiv = styled.div`
  height: 80%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    transform: rotate(180deg);
  }
`;

const FeatureProduct: React.FC<FeatureProductProps> = ({
  title,
  name,
  description,
  productId,
  image,
}) => {
  return (
    <Div>
      <ProductInfoDiv>
        <ProductInfoText>
          <Typography variant="subTitle" align="left" color="white">
            {title}
          </Typography>
          <Typography variant="h1" align="left" color="#363636">
            {name}
          </Typography>
          <Typography variant="description" align="left">
            {description}
          </Typography>
        </ProductInfoText>
        <ButtonDiv>
          <GeneralButton>
            <ButtonContentDiv>
              <Typography>Saiba mais</Typography>
              <ArrowButtonDiv>
                <Arrow styles={{ width: "100%", height: "100%" }} />
              </ArrowButtonDiv>
            </ButtonContentDiv>
          </GeneralButton>
        </ButtonDiv>
      </ProductInfoDiv>
      <ImageDiv>
        <Image source={image} alt="image" />
      </ImageDiv>
    </Div>
  );
};

export default FeatureProduct;
