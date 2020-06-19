import React from 'react'

class NewToDolist extends React.Component {
    state = {
        count: 0,
        text: '',
        data: []

    }
    reset = () => {
        this.setState({ count: 0 })
    }
    submit = (e) => {
        e.preventDefault()
        let arr = [...this.state.data, this.state.text] //Copy Array and insert text
        this.setState({ data: arr, text: "" })              // เซ็ตค่าและปรับค่า

    }
    delete = (index) => {
        let arr = [...this.state.data].filter((item, x) => x !== index)
        this.setState({ data: arr })
    }
    check = () => {

    }
    render() {

        return (
            <div>
                {this.state.count}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}> + </button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}> - </button>
                <button onClick={this.reset}> Reset</button>


                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }}></input>
                </form>
                <ul>
                    {this.state.data.map((item, index) => {
                        return <li style={{textDecoration : this.state.data[index].toggle ? "line-through" : "none"}}>
                        <input type="checkbox" onClick={this.check} ></input>{item}
                        
                        <button onClick={() =>  this.delete(index) }> X </button></li>
                    })}

                </ul>
            </div>

        )
    }
}

export default NewToDolist