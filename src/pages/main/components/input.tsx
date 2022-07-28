import styled from "@emotion/styled";

const Container = styled.div`
display : flex;
flex-direction: column;
gap: .5rem;
margin : 1px;

  input {
    background-color: #222;
    border: 1px solid transparent;

    padding: 0.5rem;
    color : white;

    &:hover {
        border: 1px solid var(--primary-color);

    }
    &:focus {
        outline: 1px solid var(--primary-color);
        color : var(--primary-color);
    }
  }

  label {
    font-style: normal;
    font-weight: 400;
    color: white;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.03em;

    &:focus {
        color : var(--primary-color)
    }
  }
`;
interface DexProps {
  name: string;
  value: string;
  onChange: (value:string) => void
}
const Input = ({ name, value, onChange }: DexProps) => {
  return (
    <Container>
      <label htmlFor="item">{name}</label>
      <input autoComplete="off" spellCheck={false} type="text" name="item" id="item" placeholder="0.00" value={value}  onChange={(e) => {onChange(e.target.value)}}/>
    </Container>
  );
};

export default Input;
