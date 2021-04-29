//Parameter 'values' comes from hook state
const validateInfo = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be 6 characters or longer";
    }

    if (!values.password2) {
        errors.password2 = "Password confirmation is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password doesn't match";
    }

    return errors;
};

export default validateInfo;
