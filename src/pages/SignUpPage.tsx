import React from 'react';
import './HomePage.css';
import website_logo from '../pictures/website_logo.png';
import {HomeHeader} from "../common/MenuHeader";
import Input from "../common/Input";
import {createUser} from "../client";

type SignUpFormProps = {};
type SignUpFormState = {username: string, password: string, email: string};
interface SignUpFormEventTarget extends HTMLInputElement {name: string}
class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
    constructor(props: SignUpFormProps) {
        super(props);
        this.state = {username: '', password: '', email: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<SignUpFormEventTarget>) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState<never>({[name]: value});
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        createUser(this.state.username, this.state.password, this.state.email)
            .then(user => alert(`User created with ID ${user.user_id}`))
            .catch(reason => alert(`Failed creating user: ${reason}`))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input title="Username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <Input title="Password" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <Input title="Email" type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function SignUpPage() {
    return (
        <div className="Home">
            <header className="Home-header">
                <br/>
                <HomeHeader/>
                <br/>
                <img src={website_logo} alt="website logo" height={300} width={500}/>
                <br/>
                <SignUpForm/>
            </header>
        </div>
    );
}

export default SignUpPage;
