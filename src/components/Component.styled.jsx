import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 50px auto 20px auto;
  width: 500px;
  height: auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5%;
`;

export const SectionStyled = styled.section`
  margin: 20px auto;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: #000c66;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0 8px;
  padding: 8px;
  font-size: 16px;
  color: white;
  min-width: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 5px #000;
`;

export const Message = styled.h3`
  color: #003060;
`;

export const StatisticsItem = styled.p`
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  padding: 5px 10px;
  border-radius: 5%;
  border: 1px solid gray;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;
