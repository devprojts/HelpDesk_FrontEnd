import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketDetailComponent } from './tiket-detail.component';

describe('TiketDetailComponent', () => {
  let component: TiketDetailComponent;
  let fixture: ComponentFixture<TiketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
