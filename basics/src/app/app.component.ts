import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  /*------------------------------------------------------------------------------------------ */
/*
  content='welcome to our app !! <strong>html test</strong>';
  color='red';

  clicked:boolean = false;


  btnClick(){
    this.clicked = ! this.clicked;
  }*/

  /**------------------ gallery ----------------- */
/*
  gallery:string[]=[
    'https://lh3.googleusercontent.com/bXB6ueK2wyb44f8A5Vxgf0_JmmTThXr7cqhUY9vr133RZkGguV2WGKV-Q4LTimmijCgO2zD3p3FxpfXcT3MALfLP3UQo8q2VpvzRLkj0Gg=s626',
    'https://img.wallpapersafari.com/desktop/1920/1080/30/70/hMkVKQ.jpg',
    'https://www.luxewalls.com.au/wp-content/uploads/2017/01/588041c54f31e.jpg'
  ]

  selectedIndex = 0;

  imgURL=this.gallery[this.selectedIndex];


  next(){
    this.selectedIndex++;

    // 0 1 2 => 3
    //          3
    if (this.selectedIndex === this.gallery.length) {
      this.selectedIndex = 0;
    }
    this.imgURL= this.gallery[this.selectedIndex];
  }

  
  previous(){
    this.selectedIndex--;

    if (this.selectedIndex < 0) {
      this.selectedIndex = (this.gallery.length -1);
    }
    
    this.imgURL= this.gallery[this.selectedIndex];
  }*/

  // next mission automatic navigation !! <3


  /********************************************************** */
  /*
  public x='0px';
  public y='0px';


  mouseIsMoving(event){
    const x = event.clientX;
    const y = event.clientY;

    console.log(x,y);

    this.x = x+'px';
    this.y= y+'px';
  }
 

  todos:any[]=[]; 

  typing(event){
     
    const keyCode = event.code; 
    if (keyCode === 'Enter') {
      const val = event.target.value;

      const todo = {
        val:val,
        date: new Date()
      } 
      this.todos.push(todo); 
      event.target.value=''; 
    } 
  }*/


  /******************************forms******************************* */

  passwordHidden = true;

  accounts:any[] = [];

  constructor(){
    console.log("constructor !!");
    
  }

  ngOnInit(){
    console.log(this.formData);
    
    
  }



  formData = new FormGroup({
    email : new FormControl('', [ Validators.email, Validators.required ]), // .valid boolean
    password: new FormControl('', [ Validators.required, Validators.maxLength(8) ]) // .valid boolean
  });


  submitForm(){
    console.log("submited !!!!");

    // get the data from the form
    const data = this.formData.value;

    console.log(data);

    const status = this.formData.status;

    console.log(status);
    

    this.accounts.push( this.formData.value );

    // reset form
    this.formData.reset();
  }

  showPassword(){
    console.log("clicked !!");
    
    this.passwordHidden = ! this.passwordHidden;
  }


 
}
