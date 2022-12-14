import styled from "styled-components";

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 1.9rem;
  margin-bottom: 1.5rem;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.4em;
  row-gap: 2.5em;
`;
