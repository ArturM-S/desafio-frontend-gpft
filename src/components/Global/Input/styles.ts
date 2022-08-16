import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    input[type='date']::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(50%) sepia(100%) saturate(1000%)
            hue-rotate(20deg);
    }
    input[type='time']::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(50%) sepia(100%) saturate(1000%)
            hue-rotate(20deg);
    }
    input[type='date']::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(50%) sepia(100%) saturate(1000%)
            hue-rotate(20deg);
    }
    input[type='datetime-local']::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(0.8) brightness(50%) sepia(100%) saturate(1000%)
            hue-rotate(20deg);
    }
`;

export const InputBase = styled.input`
    height: 40px;

    background-color: #222;
    color: #f1f1f1;

    border: none;
    border-radius: 5px;

    padding: 0 16px;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    &::placeholder {
        color: #cfcfcf;
    }
`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.188rem;

    color: #cfcfcf;
`;
