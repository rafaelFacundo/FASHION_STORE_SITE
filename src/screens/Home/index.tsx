import React from "react";
import styled from "styled-components";
import FeatureProduct from "./children/FeatureProduct";
import Slider from "components/Slider";

import teste1 from "assets/images/teste1.png";
import teste2 from "assets/images/teste2.png";

import Typography from "styles/typography";
import ProductsList from "components/ProductsList";
import ProductCard from "components/ProductCard";

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
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryTwo} 10%,
    ${({ theme }) => theme.colors.primary} 40%,
    ${({ theme }) => theme.colors.primaryThree} 80%
  );
  display: flex;
  align-items: center;
  overflow: hidden;
  animation: gradientAnimation 10s ease infinite;
`;

const Home: React.FC = () => {
  const products = [
    {
      title: "VERÃO FEMININO",
      name: "VESTIDO FLORAL DE VERÃO",
      description:
        "Confeccionado em algodão leve, ideal para dias quentes. Disponível nas cores azul, rosa e verde.",
      productId: "alskdjalskdj",
      image: teste1,
    },
    {
      title: "teSTe 2",
      name: "NOME DE TESTE 2",
      description: "UMA DESCRITÇÂO DE TESTE 2",
      productId: "alskdjaasdasdasdasdasdslskdj",
      image: teste2,
    },
  ];

  const listOfProducts1 = products.map((product) => (
    <ProductCard
      id="saldkasd"
      image={product.image}
      price={"30.00"}
      title={product.title}
    />
  ));

  return (
    <Div>
      <FeatureProductsDiv>
        <Slider>
          {products.map((product) => (
            <FeatureProduct
              title={product.title}
              name={product.name}
              description={product.description}
              productId={product.productId}
              image={product.image}
            />
          ))}
        </Slider>
      </FeatureProductsDiv>
      <ProductsList title="produtos em promoção" listOfProducts={products} />
      <ProductsList title="Ultimas peças" listOfProducts={products} />
    </Div>
  );
};

export default Home;
