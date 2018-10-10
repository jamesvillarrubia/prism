import { Mocker } from './Mocker';

describe('Mocker', () => {
  let mocker: Mocker;

  beforeEach(() => {
    mocker = new Mocker();
  });

  describe('mock()', () => {
    it('mocks', () => {
      expect(mocker.mock('test')).toMatchSnapshot();
    });
  });
});
