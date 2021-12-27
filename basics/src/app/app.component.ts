import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to angular session !!';
  success: boolean = true;
  year: number = 2016;
  user: any;

  employees:Employee[]= [
    new Employee("chourabi taher",'tchourabi@gmail.com','93863732',2000),
    new Employee("chourabi taher",'tchourabi@gmail.com','93863732',2005),
    new Employee("chourabi taher",'tchourabi@gmail.com','93863732',2008),
    new Employee("chourabi taher",'tchourabi@gmail.com','93863732',2010),
    
    
    
  ]

}
