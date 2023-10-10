import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

export const Paragraph = styled.p`
  font-size: 11px;
  padding-top: 7px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #22254b;
  justify-content: center;
  align-items: center;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 200px;
  margin: 10px;
  background-color: #373b69;
  color: white;
  font-size: 10px;
  position: relative;
  overflow: hidden;
  &:hover .description {
    display: block;
    background-color: #10121f;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #fff;
  display: none;
`;
