
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavprincipaleComponent } from './navprincipale.component';

describe('NavprincipaleComponent', () => {
  let component: NavprincipaleComponent;
  let fixture: ComponentFixture<NavprincipaleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavprincipaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavprincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
