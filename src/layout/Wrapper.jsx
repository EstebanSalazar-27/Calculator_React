import React from 'react'
import styled from 'styled-components'


const MyWrapperCont = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const Wrapper = ({ children }) => {
    return (
        <MyWrapperCont>
            {children}
        </MyWrapperCont>
    )
}
