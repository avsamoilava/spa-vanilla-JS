import {router} from '../router';
export const navigate = (path, e) => {
  e.preventDefault();
  router.navigate(path);
};