import React, { useState } from "react";
import { FormImage, FormLeft, FormRight, FormWrapper } from "./Form.elements";
import Signup from "./Signup/Signup";
import Success from "./Success/Success";
import svgRocket from "../../assets/svg/FormLeft.svg";

const Form = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <FormWrapper>
            <FormLeft>
                <FormImage src={svgRocket} />
            </FormLeft>
            <FormRight>
                <Signup setSubmitted={setSubmitted} />
                <Success submitted={submitted} />
            </FormRight>
        </FormWrapper>
    );
};

export default Form;
