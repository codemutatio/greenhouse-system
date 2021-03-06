import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #1da334;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  color: white;
`;

export const Legend = styled.View`
  flex-direction: row;
  background-color: #eee;
  padding: 5px;
  margin: 30px;
  align-items: center;
  border-radius: 4px;
`;

export const LegendItem = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 4px;
  background-color: ${props => props.inputColor};
`;

export const TitleLegend = styled.Text`
  padding: 10px;
  font-size: 10px;
`;

export const TitleNo = styled.Text`
  padding: 10px;
  font-size: 18px;
  color: #eee;
`;

export const Button = styled.Button`
  width: 10px;
  height: 20px;
`;
