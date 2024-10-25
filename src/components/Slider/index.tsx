import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Arrow from "components/svgLogos/Arrow";
import GeneralButton from "components/GeneralButton";

type SliderProps = {
  children: React.ReactNode;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const ButtonsDiv = styled.div`
  position: absolute;
  left: 10px;
  bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 100px;
`;
const ButtonDiv = styled.div`
  width: 40%;
`;

const Slider: React.FC<SliderProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [doesTheSliderHaveAnOverflow, setDoesTheSliderHaveAnOverflow] =
    useState(false);
  useEffect(() => {
    const elementToObserve = divRef.current;

    if (!elementToObserve) return;

    const handleSize = () => {
      if (elementToObserve.scrollWidth > elementToObserve.clientWidth) {
        setDoesTheSliderHaveAnOverflow(true);
      } else {
        setDoesTheSliderHaveAnOverflow(false);
      }
    };

    const resizeObserver = new ResizeObserver(() => handleSize);

    resizeObserver.observe(elementToObserve);

    return () => {
      if (elementToObserve) {
        resizeObserver.unobserve(elementToObserve);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    if (divRef.current) {
      divRef.current.scrollBy({
        left: -divRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (divRef.current) {
      divRef.current.scrollBy({
        left: divRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Div ref={divRef}>{children}</Div>
      <ButtonsDiv>
        <ButtonDiv>
          <GeneralButton onClick={handleScrollLeft}>
            <Arrow styles={{ width: "50%", height: "50%" }} />
          </GeneralButton>
        </ButtonDiv>
        <ButtonDiv>
          <GeneralButton onClick={handleScrollRight}>
            <Arrow
              styles={{
                width: "50%",
                height: "50%",
                transform: "rotate(180deg)",
              }}
            />
          </GeneralButton>
        </ButtonDiv>
      </ButtonsDiv>
    </>
  );
};

export default Slider;
