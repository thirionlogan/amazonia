import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
    let headerWrapper
    beforeEach(()=> {
       headerWrapper = shallow(<PageHeader />);
    })
    
    it('Does header have an image', ()=> {
        const image = headerWrapper.find('img');

        expect(image).toHaveLength(1);
    })

    it('Does header contain a seach bar', ()=> {
        const search = headerWrapper.find('input');

        expect(search).toHaveLength(1);
    })
})
