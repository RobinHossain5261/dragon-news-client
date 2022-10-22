import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Acceptrd all condition</h3>
            <p>Go to back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;