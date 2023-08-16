import s from './Button.module.css';

type TProps = {
  name: string;
  onLoadMoreButton: () => void;
};

const Button = ({ name, onLoadMoreButton }: TProps) => (
  <button type="button" className={s.Button} onClick={() => onLoadMoreButton()}>
    {name}
  </button>
);

export default Button;
