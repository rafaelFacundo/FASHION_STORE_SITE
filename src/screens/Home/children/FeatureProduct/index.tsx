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
  price: string;
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
`;

const ProductInfoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
  width: 50%;
`;
const ProductInfoText = styled.div``;
const ImageDiv = styled.div``;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
`;
const ButtonContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
`;
const ArrowButtonDiv = styled.div`
  height: 100%;
  width: 20px;
`;

const FeatureProduct: React.FC<FeatureProductProps> = ({
  title,
  name,
  description,
  price,
  productId,
  image,
}) => {
  return (
    <Div>
      <ProductInfoDiv>
        <ProductInfoText>
          <Typography align="left">{title}</Typography>
          <Typography variant="h1" align="left">
            {name}
          </Typography>
          <Typography align="left">{description}</Typography>
          <Typography align="left">{price}</Typography>
        </ProductInfoText>
        <ButtonDiv>
          <GeneralButton>
            <ButtonContentDiv>
              <Typography>Saiba mais</Typography>
              <ArrowButtonDiv>
                <Arrow />
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
