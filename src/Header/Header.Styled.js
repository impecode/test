import React from "react";
import styled from "styled-components";

export const Header = styled.section`
    width: 100%;
    height: 80vh;
    background-color: #282c34;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: inline-block;
        top: 0;
        left: 0;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform: scaleX(1.5);
        background-position: right top;
        background-size:100vw 200px;
        background-color: white;
    }
`

export const MainHeader = styled.div`
    position: relative;
`