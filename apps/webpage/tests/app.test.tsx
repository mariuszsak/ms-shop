import {shallow} from "enzyme";
import App from "../src/components/App";
import SampleComponent from "../src/components/SampleComponent";

describe('Initial test', () => {
    it('Should render correctly', () => {
        const component = shallow(<App/>)
        expect(component).toMatchSnapshot();
    });
    it('Should render an component correctly', () => {
        const component = shallow(<SampleComponent/>)
        expect(component).toMatchSnapshot();
    })
})