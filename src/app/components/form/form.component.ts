import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.subscription = this.form.get('email').valueChanges
      .subscribe(res => console.log(res));
  }

  onSubmit(): void {
    console.log('form submitted');
    console.log(this.form.getRawValue());
    this.onReset();
  }

  onReset(): void {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
