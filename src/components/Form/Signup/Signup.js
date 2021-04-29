import React from "react";
import {
    FormButton,
    FormError,
    FormFooter,
    FormInput,
    FormItem,
    FormLabel,
    FormSingup,
    FormTitle,
} from "../Form.elements";
import useForm from "../../../hooks/useForm";
import validation from "../validateForm";

const Signup = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(validation);

    return (
        <>
            <FormSingup onSubmit={handleSubmit}>
                <FormTitle>
                    Join the Rocket Team! Create an account and fly to the moon.
                </FormTitle>
                <FormItem>
                    <FormLabel htmlFor="username">Username:</FormLabel>
                    <FormInput
                        placeholder="Enter your username"
                        type="text"
                        name="username"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <FormError>{errors.username}</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <FormError>{errors.email}</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <FormInput
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <FormError>{errors.password}</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password2">Confirm password:</FormLabel>
                    <FormInput
                        placeholder="Confirm your password"
                        type="password"
                        name="password2"
                        id="password2"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    <FormError>{errors.password2}</FormError>
                </FormItem>
                <FormButton>Submit</FormButton>
                <FormFooter>
                    Already have an account? Login <a href="#">here</a>.
                </FormFooter>
            </FormSingup>
        </>
    );
};

export default Signup;
