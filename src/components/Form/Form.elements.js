import styled from "styled-components";

export const FormInput = styled.input`
    display: block;
    background-color: ${(props) => props.theme.colors.accent};
    outline: none;
    border: 1px solid;
`;
