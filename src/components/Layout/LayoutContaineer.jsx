import { AppBar } from 'components/AppBar/NavBar';
// import { Outlet } from 'react-router-dom';
import { StyledLayout } from './LayoutContaineer.styled';

export const Layout = () => {
  return (
    <StyledLayout>
      <AppBar />
      {/* <div>Contetn</div> */}
      {/* <Outlet /> */}
    </StyledLayout>
  );
};
