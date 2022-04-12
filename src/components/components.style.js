import styled from "styled-components";

export const Title = styled.h2`
  font-size: 3em;
  text-align: center;
  background: black;
  color: white;
  margin: 0;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
`;

export const Wrapper = styled.div`
  background: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3%;
`;

export const WrapperCards = styled.div`
  background: rgb(54, 54, 54);
  border-radius: 20px;
  display: flex;
  width: 400px;
  color: white;
  margin: 5px;
`;

export const WrapperCardsImages = styled.div`
  margin: 5px;
  border-radius: 10px;
  display: flex;
  color: white;
`;

export const WrapperCardsDescription = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  padding: 2%;
`;