import React from "react";
import { FormImage, FormSuccess, FormTitle } from "../Form.elements";
import svgSuccess from "../../../assets/svg/FormSuccess.svg";
import useForm from "../../../hooks/useForm";

const Success = () => {
    const { submitted } = useForm();

    return (
        <FormSuccess submitted={false}>
            <FormTitle defaultCol big>
                Your account has been created!
            </FormTitle>
            <FormTitle defaultCol>Prepare for launching!</FormTitle>
            <FormImage src={svgSuccess} />
        </FormSuccess>
    );
};

export default Success;
