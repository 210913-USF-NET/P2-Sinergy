import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedPlaylistComponent } from './embed-playlist.component';

describe('EmbedPlaylistComponent', () => {
  let component: EmbedPlaylistComponent;
  let fixture: ComponentFixture<EmbedPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
