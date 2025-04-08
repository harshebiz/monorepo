import styled from 'tailwind';

const StyledMyNewLib = styled.div`
  color: pink;
`;

export function MyNewLib() {
  return (
    <StyledMyNewLib>
      <h1>Welcome to MyNewLib!</h1>
    </StyledMyNewLib>
  );
}

export default MyNewLib;
