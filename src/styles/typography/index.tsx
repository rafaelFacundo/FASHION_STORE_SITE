import styled from "styled-components";
import typographyVariants from "./variants";

type Variant = keyof typeof typographyVariants;

type TypographyProps = {
  variant?: Variant;
  color?: string;
  align?: "left" | "center" | "right";
};

const Typography = styled.p<TypographyProps>`
  ${({ variant = "h2" }) => typographyVariants[variant]}
  color: ${({ color = "black" }) => color};
  text-align: ${({ align = "left" }) => align};
`;

export default Typography;
