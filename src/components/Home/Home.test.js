import { shallow } from 'enzyme'
import React from 'react'
import Home from './Home'
import PageHeader from '../PageHeader/PageHeader'


describe('Home', () => {
    let HomeWrapper
    beforeEach(() => {
        HomeWrapper = shallow(<Home/>);
        global.fetch = jest.fn();
    })

    it('renders the page header component', () => {
        expect(HomeWrapper.find(PageHeader)).toHaveLength(1)
    })

    it('has state', () => {
        expect(HomeWrapper.state()).not.toBeNull()
    })
    it('checks to see if componentDidMount() is called', () => {
        const spyDiDMount = jest.spyOn(Home.prototype, 'componentDidMount');

        fetch.mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                json: () =>{
                    return Promise.resolve({
                        test: 'test',
                    });
                }
            })
        })

        const didMount = HomeWrapper.instance().componentDidMount();

        expect(spyDiDMount).toHaveBeenCalled();  
    })

})