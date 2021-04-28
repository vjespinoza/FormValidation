import React from "react";
import { FormImage, FormLeft, FormRight, FormWrapper } from "./Form.elements";
import Signup from "./Signup/Signup";
import Success from "./Success/Success";
import svgRocket from "../../assets/svg/FormLeft.svg";

const Form = () => {
    return (
        <FormWrapper>
            <FormLeft>
                <FormImage src={svgRocket} />
            </FormLeft>
            <FormRight>
                <Signup />
                {/* <Success /> */}
            </FormRight>
        </FormWrapper>
    );
};

export default Form;
