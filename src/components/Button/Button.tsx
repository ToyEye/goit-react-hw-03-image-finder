import { ButtonStyled } from './Button.styled';

type TProps = {
  name: string;
  onLoadMoreButton: () => void;
};

const Button = ({ name, onLoadMoreButton }: TProps) => (
  <ButtonStyled type="button" onClick={() => onLoadMoreButton()}>
    {name}
  </ButtonStyled>
);

export default Button;
