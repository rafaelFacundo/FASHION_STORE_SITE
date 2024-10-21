import React from "react";
import styled from "styled-components";
import Typography from "styles/typography";
import GeneralButton from "components/GeneralButton";
import Arrow from "components/svgLogos/Arrow";

type FeatureProductProps = {
  title: string;
  name: string;
  description: string;
  price: string;
  productId: string;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductInfoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageDiv = styled.div``;
const ButtonContentDiv = styled.div``;
const ArrowButtonDiv = styled.div``;

const FeatureProduct: React.FC<FeatureProductProps> = ({
  title,
  name,
  description,
  price,
  productId,
}) => {
  return (
    <Div>
      <ProductInfoDiv>
        <Typography>{title}</Typography>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{price}</Typography>
        <GeneralButton>
          <ButtonContentDiv>
            <Typography>Saiba mais</Typography>
            <ArrowButtonDiv>
              <Arrow />
            </ArrowButtonDiv>
          </ButtonContentDiv>
        </GeneralButton>
      </ProductInfoDiv>
      <ImageDiv></ImageDiv>
    </Div>
  );
};

export default FeatureProduct;
