import React from 'react';

class AddTodos extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className="">
                <form onSubmit={ this.handleSubmit }>
                    <input placeholder="Add your task and press enter" type="text" onChange={ this.handleChange } value={ this.state.content }/>
                </form>
            </div>
        )
    }
}

export default AddTodos; 