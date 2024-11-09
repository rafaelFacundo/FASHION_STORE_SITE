import React from "react";
import styled from "styled-components";
import Typography from "styles/typography";
import Image from "components/ImageComponent";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 400px;
  margin-right: 25px;
  //box-shadow: 10px 5px 50px black;
  flex-shrink: 0;
  padding: 10px;
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

type ProductCardProps = {
  title: string;
  image: string;
  price: string;
  id: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  id,
}) => {
  return (
    <Div>
      <ImageDiv>
        <Image alt="person with a dress" source={image} />
      </ImageDiv>
      <Typography variant="description">{title}</Typography>
      <Typography variant="description">R$ ${price}</Typography>
    </Div>
  );
};

export default ProductCard;
