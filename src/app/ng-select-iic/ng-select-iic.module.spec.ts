import { NgSelectIicModule } from './ng-select-iic.module';

describe('NgSelectIicModule', () => {
  let ngSelectIicModule: NgSelectIicModule;

  beforeEach(() => {
    ngSelectIicModule = new NgSelectIicModule();
  });

  it('should create an instance', () => {
    expect(ngSelectIicModule).toBeTruthy();
  });
});
