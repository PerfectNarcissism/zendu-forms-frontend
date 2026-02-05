import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarComponent } from './topbar.component';
import { By } from '@angular/platform-browser';
import { LucideAngularModule, House, List, User, Activity, LayoutDashboard, GitMerge, Bell, LogOut, History } from 'lucide-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TopbarComponent,
        RouterTestingModule,
        LucideAngularModule.pick({
          House, List, User, Activity, LayoutDashboard, GitMerge, Bell, LogOut, History
        })
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const titleElement = fixture.debugElement.query(By.css('.topbar-title'));
    expect(titleElement.nativeElement.textContent).toContain('ZenduForms');
  });

  it('should have correct navigation links', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-item'));
    expect(links.length).toBe(6);

    const expectedLinks = [
      { text: 'Forms', href: '/forms' },
      { text: 'Customers', href: '/customers' },
      { text: 'Submissions', href: '/submissions' },
      { text: 'History', href: '/history' },
      { text: 'Reports', href: '/reports' },
      { text: 'Workflow', href: '/workflow' }
    ];

    links.forEach((link, index) => {
      const anchor = link.nativeElement as HTMLAnchorElement;
      expect(anchor.textContent).toContain(expectedLinks[index].text);
      expect(anchor.getAttribute('href')).toBe(expectedLinks[index].href);
    });
  });

  it('should render icons', () => {
    const icons = fixture.debugElement.queryAll(By.css('lucide-icon'));
    // 6 nav links + 2 standard buttons = 8 icons
    expect(icons.length).toBe(8);
  });
});
