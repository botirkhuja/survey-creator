import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss'],
})
export class SurveyCreatorComponent implements OnInit {

  surveyCreatorForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.surveyCreatorForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      description: new FormControl(null, [Validators.maxLength(500)]),
      pointValue: new FormControl(null),
      questions: new FormArray([
        new FormGroup({
          title: new FormControl(null, [Validators.maxLength(250)]),
          type: new FormControl(null)
        })
      ])
    });
  }

  addMoreQuestion() {
    (this.surveyCreatorForm.get('questions') as FormArray).push(
      new FormGroup({
        title: new FormControl(null),
        type: new FormControl(null)
      })
    );
  }

  submitForm() {
    console.log(this.surveyCreatorForm.value);
  }

}
