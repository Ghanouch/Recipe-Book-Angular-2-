import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropDown]'
})
export class DropDownDirective {

  @HostBinding('class.open')  get opened()
  {
    return this.open;
  }
  @HostListener('click')  clickOpen()
  {
    this.open = true;
  }

  @HostListener('mouseleave') leave()
  {
    this.open = false;
  }
  constructor() { }

  private open: boolean = false;
}
