import { useState, useEffect } from "react";

const useForm = (validation) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation function comes from validateForm.js and it's argument is the state
        setErrors(validation(values));

        let clearForm = {};
        for (const value in values) {
            clearForm = values[value] = "";
        }

        setValues({ ...values, clearForm });
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
