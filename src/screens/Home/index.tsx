import React from "react";
import styled from "styled-components";
import FeatureProduct from "./children/FeatureProduct";
import Slider from "components/Slider";

import teste1 from "assets/images/teste1.png";
import teste2 from "assets/images/teste2.png";

import Typography from "styles/typography";

const Div = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FeatureProductsDiv = styled.div`
  width: 100%;
  height: 90vh;
  background: linear-gradient(135deg, #00b4db 10%, #ff6a88 40%, #f0f4c3 80%);
  display: flex;
  align-items: center;
  overflow: hidden;
  animation: gradientAnimation 10s ease infinite;
`;

const Home: React.FC = () => {
  const products = [
    {
      title: "teSTe 1",
      name: "NOME DE TESTE",
      description: "UMA DESCRITÇÂO DE TESTE",
      price: "39,90",
      productId: "alskdjalskdj",
      image: teste1,
    },
    {
      title: "teSTe 2",
      name: "NOME DE TESTE 2",
      description: "UMA DESCRITÇÂO DE TESTE 2",
      price: "239,90",
      productId: "alskdjaasdasdasdasdasdslskdj",
      image: teste2,
    },
  ];

  return (
    <Div>
      <FeatureProductsDiv>
        {products.map((product) => (
          <FeatureProduct
            title={product.title}
            name={product.name}
            description={product.description}
            price={product.price}
            productId={product.productId}
            image={product.image}
          />
        ))}
      </FeatureProductsDiv>
    </Div>
  );
};

export default Home;
