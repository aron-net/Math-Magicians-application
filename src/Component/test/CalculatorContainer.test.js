import renderer from 'react-test-renderer';
import CalculatorContainer from '../CalculatorContainer';

it('render correctly', () => {
    const tree = renderer.create(<CalculatorContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});
