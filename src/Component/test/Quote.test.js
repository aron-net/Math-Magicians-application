import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
});