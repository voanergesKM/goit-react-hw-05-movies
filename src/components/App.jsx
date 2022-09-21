import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/NavBar';
import { Trendings } from './TrendList/TrendList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AppBar />}>
          <Route index element={<Trendings />} />
          <Route path="films" element={<div>Films</div>} />
        </Route>
      </Routes>
    </>
  );
};
