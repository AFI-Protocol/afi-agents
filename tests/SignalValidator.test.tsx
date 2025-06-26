import SignalValidator, { SignalData } from '../ui/SignalValidator';
import renderer from 'react-test-renderer';

const mock: SignalData = {
  id: 'test-001',
  timestamp: '2025-06-26T00:00:00Z',
  source: 'ETH/USDT',
  signalType: 'beta',
  confidence: 75.1,
  message: 'Funding flipped negative.',
};

test('renders without crashing', () => {
  const tree = renderer.create(<SignalValidator signal={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
