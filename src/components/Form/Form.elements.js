import styled from "styled-components";

const focusEffect = `box-shadow: 0 0 0 3px ${(props) =>
    props.theme.colors.primary}`;

export const FormWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    width: 60vw;
    height: fit-content;
    border-radius: 0.8rem;
    overflow: hidden;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);

    @media (max-width: 812px) {
        width: 90vw;
        flex-direction: column;
    }

    @media (max-width: 812px) and (orientation: landscape) {
        align-self: flex-start;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }
`;

export const FormLeft = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.bgCol};
    background-image: ${(props) => props.theme.colors.gradient};

    @media (max-width: 1050px) {
        display: none;
    }

    @media (max-width: 1250px) and (orientation: landscape) {
        display: none;
    }
`;

export const FormRight = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.bgDark};
    position: relative;

    @media (max-width: 425px) {
        padding: 1rem;
    }
`;

export const FormImage = styled.img`
    width: 100%;
`;

export const FormSingup = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    width: 100%;

    @media (max-width: 425px) {
        padding: 0;
    }
`;

export const FormTitle = styled.h2`
    font-size: ${({ big }) => (big ? "2.5rem" : "1.6rem")};
    color: ${(props) =>
        props.defaultCol ? props.theme.colors.bgDark : "#fff"};
    margin-bottom: 1.5rem;

    @media (max-width: 425px) {
        font-size: 1.1rem;
    }
`;

export const FormItem = styled.div`
    display: block;
    width: 100%;
    position: relative; //Position for FormError
`;

export const FormLabel = styled.label`
    color: white;
    font-size: 1rem;
`;

export const FormInput = styled.input`
    display: block;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    width: 100%;
    height: 2.5rem;
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.bgDark};

    &:focus {
        ${focusEffect}
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 425px) {
        margin-bottom: 1.1rem;
    }
`;

export const FormError = styled.span`
    color: red;
    position: absolute;
    bottom: 10%;
    left: 0;
    font-size: 0.9rem;

    @media (max-width: 425px) {
        bottom: 1%;
        font-size: 0.8rem;
    }
`;

export const FormButton = styled.button`
    outline: none;
    border: none;
    border-radius: 0.2rem;
    background-color: ${(props) => props.theme.colors.bgCol};
    background-image: ${(props) => props.theme.colors.gradient};
    color: white;
    height: 2.5rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
        filter: brightness(1.1);
    }
`;

export const FormFooter = styled.footer`
    display: block;
    color: white;
    margin-top: 1rem;
    text-align: center;
    font-size: 0.8rem;

    & button {
        color: ${(props) => props.theme.colors.primary};
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
`;

export const FormSuccess = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.bgLigth};
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 4rem;
    transition: all 200ms ease-in-out;
    /* transform: translateY(100%); */
    transform: ${(props) =>
        props.submitted ? "translateY(0)" : "translateY(100%)"};
`;
