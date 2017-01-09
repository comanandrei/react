import React from "react";
import Title from "./header/Title";

export default class Header extends React.Component {

    handleChange(e) {
        const value = e.target.value;
        this.props.changeTitle(value);
    }
    render() {

        return (
            <div>
                <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}