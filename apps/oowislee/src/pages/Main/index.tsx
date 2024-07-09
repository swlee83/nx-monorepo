import { useNavigate } from 'react-router-dom';
import { MainStyled } from './styled';

const Main = () => {
  const navigate = useNavigate();
  return (
    <MainStyled>
      <ul>
        <li onClick={() => navigate('image-lazy-loading')}>
          Image Lazy Loading
        </li>
      </ul>
    </MainStyled>
  );
};

export default Main;
