import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useForm } from "react-hook-form"

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    if (user) {
        console.log(user);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-neutral-700 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'error message'
                                    }
                                })}
                            />
                            <label class="label">
                                <span class="label-text-alt">Bottom Left label</span>
                            </label>
                        </div>


                        <input

                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        {errors.firstName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        )}

                        <input
                            {...register("mail", { required: "Email Address is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p role="alert">{errors.mail.message}</p>}

                        <input type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent uppercase"
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;