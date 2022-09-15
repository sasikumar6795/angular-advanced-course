import { AfterContentInit, Component, ContentChild, Input, OnInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input()
  icon: string

  @ContentChild(InputRefDirective,{static:false})
  input: InputRefDirective;

  constructor() { }
  ngAfterContentInit(): void {
    if(!this.input) {
      console.error('component needs an input');
    }
    
  }

  ngOnInit() {
   // console.log(this.input);
  }

  @HostBinding('class.input-focus') 
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClassess = {
      'fa':true
    };

    if(this.icon) {
      cssClassess['fa-' + this.icon] = true;
    }
   // console.log(cssClassess)
    return cssClassess;
  }

}
