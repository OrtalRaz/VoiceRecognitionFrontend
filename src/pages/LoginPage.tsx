import React from 'react';
import './HomePage.css';
import website_logo from '../pictures/website_logo.png';
import {HomeHeader} from "../common/MenuHeader";
import Input from "../common/Input";
import {LinkButton} from "../common/button/Button";

type LoginFormProps = {};
type LoginFormState = {username: string, password: string};
interface LoginFormEventTarget extends HTMLInputElement {name: string}
class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
        this.state = {username: '', password: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<LoginFormEventTarget>) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState<never>({[name]: value});
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        alert(`Submitted username: ${this.state.username}, password: ${this.state.password}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input title="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <Input title="Password" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
            </form>
        );
    }
}

function LoginPage() {
    return (
        <div className="Home">
            <header className="Home-header">
                <br/>
                <HomeHeader/>
                <br/>
                <img src={website_logo} alt="website logo" height={300} width={500}/>
                <br/>
                <LoginForm/>
                <div className="column">
                    <LinkButton text="LOG IN" to='/main'/>
                </div>
            </header>
        </div>
    );
}

export default LoginPage;
