import styled from "styled-components";

const focusEffect =
    "box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary}";

export const FormWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    width: 60rem;
    height: fit-content;
    position: relative; //Position for itself (FormWrapper)
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.8rem;
    overflow: hidden;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
`;

export const FormLeft = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.bgCol};
    background-image: ${(props) => props.theme.colors.gradient};
`;

export const FormRight = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.bgDark};
    position: relative;
`;

export const FormImage = styled.img`
    width: 100%;
`;

export const FormSingup = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    width: 100%;
`;

export const FormTitle = styled.h2`
    font-size: ${({ big }) => (big ? "2.5rem" : "1.6rem")};
    color: ${(props) =>
        props.defaultCol ? props.theme.colors.bgDark : "#fff"};
    margin-bottom: 1.5rem;
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
`;

export const FormError = styled.span`
    color: red;
    position: absolute;
    bottom: 10%;
    left: 0;
    font-size: 0.9rem;
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

    & a {
        color: ${(props) => props.theme.colors.primary};
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
    transform: translateY(100%);
`;
