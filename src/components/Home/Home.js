import React from 'react'
import PageHeader from '../PageHeader/PageHeader'



class Home extends React.Component{
    state = {
        test: 'test'
    }

    componentDidMount(){
        //  fetch("http://3.21.164.220/products?count=10")
        //     .then((response) => response.json())
        //     .then((data) => this.setState({ wishlist: data}))
    }
render(){
    return(
        <PageHeader/>
    )
}
}
  








export default Home