import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


  constructor (private route : ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.route = params ['forgetpassword'];
    })
  }
 }
