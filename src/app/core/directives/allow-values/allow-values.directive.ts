import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[allowValues],textarea[allowValues]',
})
export class AllowValuesDirective {

  @Input() isInputType: string;
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    if (this.isInputType == 'phone') {
      this._el.nativeElement.value = initalValue.replace(/[^0-9+]*/g, '');
    } else if (this.isInputType == 'number') {
      let tempInitalValue = initalValue.replace(/^0+/, '');
      this._el.nativeElement.value = tempInitalValue.replace(/[^0-9]*/g, '');
    } else if (this.isInputType == 'decimal') {
      this._el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
    } else if (this.isInputType == 'alphaNumeric') {
      if (initalValue && initalValue[0] == " ") {
        this._el.nativeElement.value = "";
      } else {
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z0-9- ]/g, '');
      }
    }
    else if (this.isInputType == 'removeSpace') {
      this._el.nativeElement.value = initalValue.replace(/\s/g, '')
    }
    else if (this.isInputType == 'firstCharNoSpace') {
      if (initalValue && initalValue[0] == " ") {
        this._el.nativeElement.value = "";
      }
    }
    else if (this.isInputType == 'onlyChar') {
      if (initalValue && initalValue[0] == " ") {
        this._el.nativeElement.value = "";
      } else {
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z- ]/g, '');
      }
    }
    else if (this.isInputType == 'decimalWithTwoDigits') {
      let tempInitalValue = initalValue.replace(/^0+/, '');
      tempInitalValue = tempInitalValue.replace(/[^0-9\.]*/g, '');
      tempInitalValue = tempInitalValue.replace(/^(?:0?\.[0-9]{2})$/, '');
      tempInitalValue = tempInitalValue.replace("-", "");
      if (tempInitalValue && tempInitalValue.includes('.')) {
        let num = tempInitalValue.split('.');
        var numlength = num.length - 1;
        if (numlength > 1) {
          this._el.nativeElement.value = (tempInitalValue.substring(0, tempInitalValue.length - 1));
        } else {
          let dec = num[numlength];
          if (dec) {
            num[0] += '.' + dec[0];
            if (dec[1]) {
              num[0] += dec[1]
            }
            this._el.nativeElement.value = num[0];
          } else {
            this._el.nativeElement.value = num[0] += '.';
          }
        }
      } else {
        this._el.nativeElement.value = tempInitalValue;
      }
    }
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
