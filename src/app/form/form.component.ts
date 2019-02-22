import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mioForm: FormGroup;




  constructor() {

    this.mioForm = new FormGroup({
                          
      nome     : new FormControl(),
      cognome  : new FormControl(),
      citta    : new FormControl()
    });
   }



  



  ngOnInit()  {
    this.mioForm = new FormGroup({
      'nome': new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      'cognome': new FormControl('', [
        Validators.required, Validators.minLength(2)]),
      'citta': new FormControl('', [
        Validators.required, Validators.minLength(2)])
    });
  }

  // ritorna il valore del campo del form
  get nome() { return this.mioForm.get('nome'); }

  get cognome() { return this.mioForm.get('cognome'); }

  get citta() { return this.mioForm.get('citta'); }




  getInfo() {
    console.log(this.mioForm.value);
  }
    
  }
  

  


