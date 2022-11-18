import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private router: Router,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.initForm()
    
  }
  toList(){
    console.log(this.form.value)
    this.router.navigate(['listes'])
    
    
  }
  initForm(){
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

}
