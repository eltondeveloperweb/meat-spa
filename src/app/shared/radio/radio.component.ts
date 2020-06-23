import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR,  ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];
  value: any;

  constructor() { }
 
  ngOnInit() {
  }

  onChange: any;

  //quando for passar um valor para o elemento
  writeValue(obj: any): void {
    this.value = obj;
  }

  //chama uma função sempre que o valor interno mudar
  registerOnChange(fn: any):void{
    this.onChange = fn;
  }

  registerOnTouched(){

  }

  setValue(value: any){
    this.value = value;
    this.onChange(this.value);
  }

}
