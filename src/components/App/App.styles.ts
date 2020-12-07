import styled from "@emotion/styled";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: -webkit-fill-available;
  padding: 30px;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 50px;
`;

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

export const HeaderInnerContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
`;
