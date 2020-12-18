import { shallow } from 'enzyme'
import React from 'react'
import Home from './Home'
import PageHeader from '../PageHeader/PageHeader'


describe('Home', () => {
    let HomeWrapper
    beforeEach( () => {
        HomeWrapper = shallow(<Home/>)
    })

    it('renders the page header component', () => {
        expect(HomeWrapper.find(PageHeader)).toHaveLength(1)
    })

    it('has state', () => {
        expect(HomeWrapper.state()).not.toBeNull()
    })

    
})