import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handaleSubmit = (event) => {
        event.preventDefault();

        const from = event.target;

        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset();
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handaleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;