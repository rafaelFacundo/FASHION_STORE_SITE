import React from "react";
import styled from "styled-components";
import Slider from "components/Slider";
import Typography from "styles/typography";
import ProductCard from "components/ProductCard";
import TestImage from "../../assets/images/teste1.png";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 700px;

  padding: 20px;
`;

const SliderDiv = styled.div`
  width: 100%;
  flex-grow: 1;
`;

type ProductsListProps = {
  title?: string;
  listOfProducts: any[];
};

const ProductsList: React.FC<ProductsListProps> = ({
  title,
  listOfProducts,
}) => {
  return (
    <Div>
      <Typography variant="subTitle">{title}</Typography>
      <SliderDiv>
        <Slider>
          {listOfProducts.map((product) => (
            <ProductCard
              id="saldkasd"
              image={product.image}
              price={"30.00"}
              title={product.title}
            />
          ))}
          <ProductCard
            id="saldkasd"
            image={TestImage}
            price={"30.00"}
            title={"Blusa"}
          />
          <ProductCard
            id="saldkasd"
            image={TestImage}
            price={"30.00"}
            title={"Blusa"}
          />
          <ProductCard
            id="saldkasd"
            image={TestImage}
            price={"30.00"}
            title={"Blusa"}
          />
        </Slider>
      </SliderDiv>
    </Div>
  );
};

export default ProductsList;
