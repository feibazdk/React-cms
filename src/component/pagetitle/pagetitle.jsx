import React from 'react'

export default class pagetitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className="page-header">{ this.props.title }</h1>
            </div>
        )
    }
}