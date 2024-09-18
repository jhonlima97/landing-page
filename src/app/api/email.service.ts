import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //Function for email 
  validateEmail(email: string): string {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email)) {
      return 'Account valid';
    } else {
      return 'Account invalid';
    }
  }
}
