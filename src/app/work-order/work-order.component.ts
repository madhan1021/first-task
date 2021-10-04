import { Component, OnInit } from '@angular/core';
import {NewServiceService} from '../new-service.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {
  // loginForm: FormGroup;

    constructor(private userService: NewServiceService) {
  }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   contractor_name: new FormControl("",  [Validators.required]),
    //   workOrder_number: new FormControl("", [Validators.pattern('0-9')]),
    //   workOrder_date: new FormControl(""),
    //   workOrder_description: new FormControl(""),
    // });
  }
  contractor_name: string = "";
  workOrder_number: number = 0;
  workOrder_date: string = "";
  workOrder_description: string = "";

  getData() {
    const total_values = {
      contractor_name: this.contractor_name,
      workOrder_number: this.workOrder_number,
      workOrder_date: this.workOrder_date,
      workOrder_description: this.workOrder_description
    }
    this.userService.register(total_values).subscribe((r: any) => {
      // this.result = r;
      console.log(r);
    })
  }

  // get user(){
  //   return this.loginForm.get("user");
  // }

}
