import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  let userId = sessionStorage.getItem('userId');

  if (userId == null) {
  } else if (userId == 'undefined') {
  } else if (userId == '') {
  } else {
    return true;
  }

  inject(Router).navigate(['/login']);
  return false;
};
