import React from "react";

class TodoSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchByName(this.state.search);
        this.setState({ search: '' });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by Name"
                    value={this.state.search}
                    onChange={this.handleChange}></input>
                <button>Search</button>
            </form>
        )
    }
}

export default TodoSearch;