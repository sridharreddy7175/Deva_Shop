import React, { useState } from 'react';
import Base from '../core/Base';
import { isAutheticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';


export const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAutheticated();

    const handleChange = event => {
        setError('')
        setName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setError('')
        setSuccess(false)
        //Back end
        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true)
                }
                else {
                    setError('')
                    setSuccess(true)
                    setName('')
                }
            })
    }

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className="btn btn-sm  btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
            </div>
        )
    }

    const successMessage = () => {
        if (success) {
            return <h4 className="text-success">Category Created Successfully</h4>
        }
    }

    const warningMessage = () => {
        if (error) {
            return <h4 className="text-success">Failed to Category Created </h4>
        }
    }

    const myCategoryForm = () => {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <p className="lead">Enter the Category</p>
                        <input type="text" className="form-control my-3"
                            autoFocus
                            required
                            onChange={handleChange}
                            value={name}
                            placeholder="For Ex.Summer"
                        />
                        <button className="btn btn-outline-info" onClick={onSubmit}>Create Category</button>
                    </div>
                </form>
            </div>
        )

    }

    return (
        <Base title=" create a Category here"
            description="Add a new Category for new t-shirts" className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>

        </Base>
    )

}
