import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  /* Array instead of database */
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Chair',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.9'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'tables',
          price: '100.9'
        },
        {
          id: 3,
          title: 'Lamp',
          img: 'lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'lamps',
          price: '2.9'
        }
      ]
    }
  }
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
  );
  }
}

export default App;
