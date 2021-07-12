import React from "react";
import { getComics } from "../../services/index";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getComics()
      .then((response) => {
        return response.data.data;
      })
      .then((data) => {
        this.setState({ data: data.results });
      });
  }
  render() {
    return (
      <div>
        {this.state.data.length > 1 ? (
          this.state.data.map((element) => {
            return (
              <ul>
                <li>ID: ${element.id}</li>
                <li>Title: ${element.title}</li>
              </ul>
            );
          })
        ) : (
          <h1>No hay datos</h1>
        )}
      </div>
    );
  }
}
