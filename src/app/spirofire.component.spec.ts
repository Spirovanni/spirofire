import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SpirofireAppComponent } from '../app/spirofire.component';

beforeEachProviders(() => [SpirofireAppComponent]);

describe('App: Spirofire', () => {
  it('should create the app',
      inject([SpirofireAppComponent], (app: SpirofireAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'spirofire works!\'',
      inject([SpirofireAppComponent], (app: SpirofireAppComponent) => {
    expect(app.title).toEqual('Spirofire is Live!');
  }));
});
