import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 330px;
  border-radius: 10px;
  border: 2px solid grey;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 3px solid black;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

const Location = styled.p`
  text-align: center;
`;

const Tag = styled.p`
  text-align: center;
`;

const Stats = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border-top: 1px solid black;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc((100% - 0px) / 3);
  background-color: lightgray;
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

const Label = styled.span`
  font-size: 12px;
`;

const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const css = {
  Container,
  Description,
  Image,
  Name,
  Location,
  Tag,
  Stats,
  Item,
  Label,
  Quantity,
};

export default css;
