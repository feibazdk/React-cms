import React from 'react'
import PageTitle from '../component/pagetitle/pagetitle.jsx'


export default class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>  
            </div>
        )
    }
}