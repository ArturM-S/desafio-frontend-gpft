import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                height: 100vh;
                width: 100vw;
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                line-height: 200%;
                background-color: #222;
                color: #fff;
            }
        `}
    />
);

export const Title = styled.h1``;
