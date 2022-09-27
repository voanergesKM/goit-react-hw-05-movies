import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './PageLoader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor="orangered"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </StyledLoader>
  );
};
