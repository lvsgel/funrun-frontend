import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-runner',
  templateUrl: './create-runner.component.html',
  styleUrls: ['./create-runner.component.css']
})
export class CreateRunnerComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneRunner(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.runnerForm.patchValue({

          runnerName:res.data[0].runnerName,
          age:res.data[0].age,
          phone:res.data[0].phone,
          address:res.data[0].address,

      });
    });
  }
  }

  runnerForm = new FormGroup({

    'runnerName':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'phone':new FormControl('',Validators.required),
    'address':new FormControl('',Validators.required)


  });

  //to create a new runner
  runnerSubmit(){
    if(this.runnerForm.valid){
      console.log(this.runnerForm.value);
      this.service.createRunner( this.runnerForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.runnerForm.reset();
        this.successmsg = res.message;
      });

    }
    else{
      this.errormsg = 'all field is required';
    }

  }
//to update a runner
runnerUpdate()
{
  console.log(this.runnerForm.value,'updatedform');

  if(this.runnerForm.valid)
  {
    this.service.updateRunner(this.runnerForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'all field is required';
  }
}
}
