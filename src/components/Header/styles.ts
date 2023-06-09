import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    padding: 2rem 10rem;
    min-width: 50rem;

    background-color: ${props => props.theme["white-100"]};

    section {
        display: flex;
        align-items: center;
        padding: 0px;
        gap: 0.75rem;

        width: 13.75rem;
        height: 2.375rem;
    }
`

export const LocationContainter = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 100%;
    height: 100%;

    background: ${props => props.theme["purple-100"]};

    border-radius: 6px;

    p {
        color: ${props => props.theme["purple-700"]};
    }
`

export const CartContainter = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 2.375rem;
    height: 2.375rem;

    background: ${props => props.theme["yellow-100"]};
    border-radius: 6px;
    border: 0;

    svg {
        display: flex;
        align-items: center;
    }
`

export const CartConterContainter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 20px;
    height: 20px;
    right: 154px;
    top: 25px;

    background: #C47F17;
    border-radius: 1000px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;

        text-align: center;
        color: ${props => props.theme["white-100"]};
    }
`