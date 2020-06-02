// tslint:disable
import { CUSTOM_ELEMENTS_SCHEMA, Directive, Input, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';


@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('FormComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        FormComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [

      ]
    }).overrideComponent(FormComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.p1 = component.p1 || {};
    // component.p1.push = jest.fn();
    component.ngOnInit();
    // expect(component.p1.push).toHaveBeenCalled();
  });

  it('should run #submitPerson()', async () => {
    component.p1 = component.p1 || {};
    // component.p1.push = jest.fn();
    component.personForm = component.personForm || {};
    component.personForm.value = {
      firstName: {},
      lastName: {}
    };
    component.submitPerson();
    // expect(component.p1.push).toHaveBeenCalled();
  });

});
