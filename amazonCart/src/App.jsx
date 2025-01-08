import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import HomePage from './pages/Homepage';
import Cart from './pages/Cart';
import {BrowserRouter, Route, Routes} from 'react-router';

export default function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
    </RecoilRoot>
    </BrowserRouter>
  )
}