import React from 'react'


export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    // 监听输入框的改变
    onInputChange(e){
        console.log(e.target.value)
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    onSubmit(){
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-warning login-panel">
                        <div className="panel-body">欢迎登录</div>
                        <div className="panel-footer">
                            <form>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="用户名"
                                        onChange={ e => this.onInputChange(e) } />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="密码"
                                        onChange={ e => this.onInputChange(e) } />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    onClick={ e => { this.onSubmit(e) } }>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}