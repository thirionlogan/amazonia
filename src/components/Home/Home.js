import React from 'react'
import PageHeader from '../PageHeader/PageHeader'



class Home extends React.Component{
    state = {
        test: 'test'
    }

    componentDidMount(){
        //  fetch("url")
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