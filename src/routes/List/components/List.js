import React from 'react';
import PropTypes from 'prop-types';



class Userlist extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      users : []
     }
     
   }
   
  componentWillMount(){
    this.props.getData()

  }

  componentDidMount(){
    this.setState({
      users : this.props.users
    })
  }

   render(){
    const element = this.state.users.map(item => {
      return (
        <div key={item.firstName}>
          <ol>
          <li>{item.firstName}</li>
          <li>{item.Age}</li>
          <li>{item.email}</li>
          </ol>
        </div>
      )
    })
    return(
       <div>
        {element}
       </div>
     )
 
  }
}

export default Userlist;
