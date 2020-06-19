import React from "react"
import "./"
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'reactstrap'

// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
class Class1 extends React.Component {
        state = {
                count: 0,
                color: true,
                text: "",
                data: [],
                textEdit: ""

        }
        decrement = () => {
                this.setState({ count: this.state.count - 1 })
        }
        submit = (e) => {
                e.preventDefault()
                let move = [...this.state.data, { text: this.state.text, toggle: false, switchInput: false }]
                this.setState({ data: move, text: "" })
        }
        delete = (index) => {
                let arr = [...this.state.data]
                // arr.splice(index, 1)
                arr = arr.filter((ele, idx) => idx !== index)
                // idx === index
                this.setState({ data: arr })
        }
        toggle = (index) => {
                let arr = [...this.state.data]

                if (arr[index].toggle === false) {
                        arr = arr.map((obj, idx) => index === idx ? { ...obj, toggle: true } : obj)
                        this.setState({ data: arr })
                } else {
                        arr = arr.map((obj, idx) => index === idx ? { ...obj, toggle: false } : obj)
                        this.setState({ data: arr })
                }


        }
        edit = (index) => {
                let arr = [...this.state.data]
                let obj = { ...arr[index], switchInput: true }
                arr[index] = obj
                this.setState({ data: arr })
        }
        changeEdit = (e) => {
                this.setState({ textEdit: e.target.value })
        }
        enterEdit = (index, e) => {
                e.preventDefault()
                let arr = [...this.state.data]
                let obj = { ...arr[index], text: this.state.textEdit, switchInput: false }
                arr[index] = obj
                this.setState({ data: arr, textEdit: "" })

        }
        render() {
                let { data: d, age } = this.props
                let style = {
                        fontSize: "20px",
                        color: "blue"
                }
                return (<div style={style}>class component {d}
                        <p>age: {age}</p>
                        {<h3 onClick={() => {
                                this.state.color ? this.setState({ color: false }) : this.setState({ color: true })
                        }} style={{ color: this.state.color ? "brown" : "navy" }}>this.state.count</h3>}
                        {this.state.count}
                        <div>

                                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                                <button onClick={this.decrement}>-</button>
                                <button onClick={() => this.setState({ count: 0 })}>reset</button>
                        </div>
                        <form onSubmit={this.submit}>
                                <input type="text" value={this.state.text} onChange={e => { this.setState({ text: e.target.value }) }} />
                        </form>
                        <ul>
                                {this.state.data.map((obj, index) =>
                                        <li key={index} className="li" style={{ textDecoration: this.state.data[index].toggle ? "line-through" : "none" }}>
                                                <label for={`check${index}`}  >
                                                        <input onClick={() => this.toggle(index)} type="checkbox" id={`check${index}`} />
                                                        {this.state.data[index].switchInput ?
                                                                <span> {obj.text}
                                                                        <form onSubmit={(e) => this.enterEdit(index, e)}>
                                                                                <input type="text" onChange={this.changeEdit} />
                                                                        </form></span> : obj.text}

                                                </label>

                                                <button onClick={() => this.delete(index)}>x</button>
                                                <button onClick={() => this.edit(index)}>edit</button>

                                        </li>

                                )}
                        </ul>
                </div>)
        }
}

export default Class1  