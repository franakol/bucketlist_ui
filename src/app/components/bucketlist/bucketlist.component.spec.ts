import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistComponent } from './bucketlist.component';

describe('BucketlistComponent', () => {
  let component: BucketlistComponent;
  let fixture: ComponentFixture<BucketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
