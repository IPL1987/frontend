import { useAppSelector } from '../hooks/hooks';
import { selectAuth } from '../features/authSlice';
import { Role } from '../interfaces/rolesEnum';

export const useRoleVerification = () => {
  const { user, isAuth } = useAppSelector( selectAuth );

  return (roles: Role[]) => {
    if (!isAuth) {
      return false;
    } 
    if (Object.values(roles).includes(user!.role)) {
      return true;
    }
    return false;
  };
};