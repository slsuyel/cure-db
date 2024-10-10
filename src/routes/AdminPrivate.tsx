import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTokenCheckMutation } from '../redux/api/admin/adminAuthApi';
import Loader from '../components/Loader';

interface AdminPrivateProps {
  children: React.ReactNode;
}

const AdminPrivate = ({ children }: AdminPrivateProps) => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');
  const [checkToken] = useTokenCheckMutation();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const res = await checkToken({ token }).unwrap();
          if (res.message === 'Token is valid') {
            setIsValidToken(true);
          } else {
            navigate('/login', { state: { from: location }, replace: true });
          }
        } catch (error) {
          navigate('/login', { state: { from: location }, replace: true });
        }
      } else {
        navigate('/login', { state: { from: location }, replace: true });
      }
      setIsLoading(false);
    };

    validateToken();
  }, [checkToken, dispatch, location, token, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  if (isValidToken) {
    return children;
  }

  return null;
};

export default AdminPrivate;
