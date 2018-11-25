import React from 'react';
import axios from "axios";

class AllDinos extends Component {
    constructor(props) {
        super(props);
        this.state = { user: "" };
      }
  
  
  
  
  getAllDinosaurs = a => {
    a.preventDefault();
    const allDino = a.target.elements.dinosaur.value;

if (allDino) {
    axios.get(`http://35.230.143.224:8080/dinodb/api/dinosaur/${allDino}`)
    .then(res => {
      console.log(res)
    const type = res.data.type;
      this.setState({ type });
      const dinosaurName = res.data.dinosaurName;
      this.setState({dinosaurName});
      const diet = res.data.diet;
      this.setState({diet});
      const description = res.data.description;
      this.setState({description});
  
      });

  } else return;
};

render () {
return (
    <form onSubmit = {this.getAllDinosaurs}>
    <input type = "text" name="dinosaur"/>
    <button>
       Get All Dinos
    </button>
    {this.state.type ? <p> Type : {this.state.type}</p> : <p />}
    {this.state.dinosaurName ? <p> Dino : {this.state.dinosaurName}</p> : <p />}
    {this.state.diet ? <p>Diet : {this.state.diet}</p> : <p />}
    {this.state.description ? <p>Description : {this.state.description}</p> : <p />}

</form>
)

}
}

export default AllDinos