import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('CaseDetailsComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let caseServiceMock: any;
  beforeEach(async () => {
    testServiceMock = jasmine.createSpyObj('TestService', ['getCase']);
    testServiceMock.getCase.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [],
      providers: [
        { provide: TestService, useValue: testServiceMock },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('when editing a case the case dialog title should change', () => {
    spyOn(component, 'editCase');
    component.editCase();
    expect(component.editCase).toHaveBeenCalledTimes(1);
    expect(testServiceMock.getCase).toHaveBeenCalled();
  });
});
