import { useState, useEffect } from "react";

const useForm = (validation, setSubmitted, isSubmitting) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const [formData, setFormData] = useState([]);

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
    };

    useEffect(() => {
        //isSubmitting prevents the setSubmitted to fire on load
        if (Object.keys(errors).length === 0 && isSubmitting) {
            //Saves form data to state array (Simulating DB)
            //In real prject this would have a Fetch request
            setFormData([...formData, values]);
            //Displays succes page
            setSubmitted(true);
        }
    }, [errors]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
