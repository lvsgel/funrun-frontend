import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-runner.component.html',
  styleUrls: ['./update-runner.component.css']
})
export class UpdateRunnerComponent implements OnInit {

  runnerForm = new FormGroup({
    'runnerName':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'phone':new FormControl('',Validators.required),
    'address':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneRunner(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.runnerForm.patchValue({
            runnerName:res.data[0].runnerName,
            age:res.data[0].age,
            phone:res.data[0].phone,
            address:res.data[0].address
        });
      });
  }
//to update a runner
runnerUpdate()
{
  console.log(this.runnerForm.value);
    this.service.updateRunner(this.router.snapshot.params['id'], this.runnerForm.value).subscribe((result:any)=>{

    this.runnerForm.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}