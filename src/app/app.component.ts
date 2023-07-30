import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive-CURD-Operaction';
  inputData:FormGroup;
  userData:any=[];
  isEdit=false
  submitted=false;
  selectIndex:any;
  constructor(private fb:FormBuilder){
    this.inputData = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      number:['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  get f(){
    return this.inputData.controls
  }
  submit(){
    this.submitted=true; 
    if (this.inputData.valid) {
      this.userData.push(this.inputData.value)
    } else {
      console.warn('enter valid data')
    }
  }
  edit(i:any, data:any){
    this.isEdit=true;
    this.selectIndex=i;

    this.inputData.patchValue({
      name:data.name,
      email:data.email,
      number:data.number
    })
  }
  update(){
    this.isEdit=false;

  this.userData[this.selectIndex].name=this.inputData.value.name;
  this.userData[this.selectIndex].email=this.inputData.value.email;
  this.userData[this.selectIndex].number=this.inputData.value.number;
  }
  delete(i:any){
    this.userData.splice(i,1)
  }
}
