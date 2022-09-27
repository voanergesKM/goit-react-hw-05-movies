import { Outlet } from 'react-router-dom';
import { NavLink } from 'components/Link/NavigateLink';
import { Title } from 'components/PageTitle/Titles';
import { AdditionalWrapper, AdditionaNavlList } from './AdditionalInf.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/PageLoader';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Rewievs' },
  { href: 'posters', text: 'Backdrops' },
];

export const Additional = () => {
  return (
    <AdditionalWrapper>
      <Title text={'Aditional information'} />
      <AdditionaNavlList>
        {navItems.map(({ href, text }) => (
          <li key={href}>
            <NavLink to={href} text={text} />
          </li>
        ))}
      </AdditionaNavlList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AdditionalWrapper>
  );
};
