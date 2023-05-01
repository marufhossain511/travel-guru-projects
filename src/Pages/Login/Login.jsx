import React from 'react';

const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault()
    }

    return (
        <div className="hero  bg-base-200">
            <div className="hero-content w-3/4 flex-col">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-warning">Login</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
    );
};

export default Login;