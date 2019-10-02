import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1.5em;
  color: dodgerblue;
  font-family: "Helvetica";
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  /* TO DO'S
    1. create a REST API with the button + textfield form.
        -configure post requests on front-end side
        -make form better looking(css)
        -think about what other information besides stems I should put into this.
    2. migrate python code  from app.py to dictionary.py for more modular code. (easier to find POF)
*/
  render() {
    return (
      <Paragraph>
        <p>
          <form noValidate autoComplete="off">
            <TextField
              id="search-a-word"
              label="Word"
              margin="normal"
              variant="outlined"
            />
            <Button>Go</Button>
          </form>
          <br />
          The stems are {this.state.data}
        </p>
      </Paragraph>
    );
  }

  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
    axios
      .get("http://localhost:5000/")
      .then(response => {
        console.log(response);
        this.setState({ data: response.data.stems });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;
