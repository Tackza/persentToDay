import React from "react"
import ClassName from "./ClassCom.js"
import Test from "./Test.js"
import "./App.css"
import { Card } from "./Card"
import NewToDolist from "./newToDOList.js"

class App extends React.Component {
  state = {
    card: [{
      pic: "https://cdn.pixabay.com/photo/2017/10/02/12/10/women-2808629_960_720.jpg",
      title: "Card 1 ",
      content: "This HTML file is a template. If you open it directly in the browser, you will see an empty page."
    }
      , {
      pic: "https://cdn.pixabay.com/photo/2017/10/02/12/10/women-2808629_960_720.jpg",
      title: "Card 2 ",
      content: "This HTML file is a template. If you open it directly in the browser, you will see an empty page."
    }
      , {
      pic: "https://cdn.pixabay.com/photo/2017/10/02/12/10/women-2808629_960_720.jpg",
      title: "Card 3 ",
      content: "This HTML file is a template. If you open it directly in the browser, you will see an empty page."
    }
      , {
      pic: "https://cdn.pixabay.com/photo/2017/10/02/12/10/women-2808629_960_720.jpg",
      title: "Card 4 ",
      content: "This HTML file is a template. If you open it directly in the browser, you will see an empty page."
    }
      , {
      pic: "https://cdn.pixabay.com/photo/2017/10/02/12/10/women-2808629_960_720.jpg",
      title: "Card 5 ",
      content: "This HTML file is a template. If you open it directly in the browser, you will see an empty page."
    }
    ]
  }

  render() {

    return (
      <div className="App">
        <Test></Test>
        <ClassName></ClassName>
        <NewToDolist/>

        {/* <div className="container_card">
          <div className="Navbar"></div>
          <div className="card">
            {this.state.card.map(obj => <Card pic="obj.pic" title="obj.title" content="obj.content" />)} */}


          </div>
        

    )
  }
}
export default App