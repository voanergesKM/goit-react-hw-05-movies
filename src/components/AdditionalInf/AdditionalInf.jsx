import { Outlet } from 'react-router-dom';
import { NavLink } from 'components/Link/NavigateLink';
import { Title } from 'components/PageTitle/Titles';
import { AdditionalWrapper, AdditionaNavlList } from './AdditionalInf.styled';

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
            <NavLink location={href} text={text} />
          </li>
        ))}
      </AdditionaNavlList>
      <Outlet />
    </AdditionalWrapper>
  );
};
