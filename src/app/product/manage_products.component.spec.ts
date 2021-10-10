import { TestBed } from '@angular/core/testing';
import { ManageProductsComponent } from './manage_products.component';

describe('ManageProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ManageProductsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ManageProductsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Task'`, () => {
    const fixture = TestBed.createComponent(ManageProductsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Task');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ManageProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Task app is running!');
  });
});
