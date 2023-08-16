import { Blocks } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderSimbol.styled';

const LoaderSimbol = () => {
  return (
    <LoaderContainer>
      <Blocks color="#00BFFF" height={80} width={80} />
    </LoaderContainer>
  );
};

export default LoaderSimbol;
