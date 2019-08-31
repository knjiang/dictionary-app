import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          data : null,
      }
    }
  
    render() {
        return (
            <p>
                <Button>Go</Button>
                <br />
                The stems are { this.state.data }
            </p>
        );
    }
  
    async componentDidMount() {
      // Load async data.
      // Update state with new data.
      // Re-render our component.
      axios.get('http://localhost:5000/')
        .then((response) => {
            console.log(response)
            this.setState({data : response.data.stems})
        })
        .catch((error) =>{
            console.log(error)
        })
    }
  }

  
  export default App;