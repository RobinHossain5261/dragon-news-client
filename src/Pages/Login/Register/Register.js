import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, userUpdateProfile, verifyEmail } = useContext(AuthContext);

    const handaleSubmit = (event) => {
        event.preventDefault();

        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                from.reset();
                setError('');
                handaleUserUpdateProfile(name, photoURL);
                handaleEmailVarification();
                toast.success('Please Verify Your Email');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const handaleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    const handaleUserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userUpdateProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handaleEmailVarification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <h3 className='text-center'>Please Register</h3>
            <Form onSubmit={handaleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your photoUrl</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Enter photoUrl" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handaleAccepted}
                        label={<>Accepted <Link to='/terms'>all terms and condition</Link> </>} />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;