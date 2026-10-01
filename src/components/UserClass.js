import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log(props.name+"Constructor");
    
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  async componentDidMount(){
    const data= await fetch("https://api.github.com/users/vidhi1405abes");
    const json=await data.json();
    console.log(json);
    
    
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log(name + "rendered");
    
    return (
      <div className="infoCard">
        <h1>{name}</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
                count:this.state.count+1
            })
          }}
        >
          Click
        </button>
        <h1 className="name">Vidhi</h1>
        <h3 className="location">Meerut</h3>
        <h4 className="linkedIn">wcjdcdc</h4>
      </div>
    );
  }
}
export default UserClass;
