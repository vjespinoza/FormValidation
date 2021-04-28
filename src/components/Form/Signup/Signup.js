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

const handleChange = () => {};

const handleSubmit = (e) => {
    e.preventDefault();
};

const Signup = () => {
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
                        // value=""
                        onChange={handleChange}
                    />
                    <FormError>Text</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        id="email"
                        // value=""
                        onChange={handleChange}
                    />
                    <FormError>Text</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password">Username:</FormLabel>
                    <FormInput
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                        id="password"
                        // value=""
                        onChange={handleChange}
                    />
                    <FormError>Text</FormError>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password2">Username:</FormLabel>
                    <FormInput
                        placeholder="Enter your password"
                        type="password"
                        name="password2"
                        id="password2"
                        // value=""
                        onChange={handleChange}
                    />
                    <FormError>Text</FormError>
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
