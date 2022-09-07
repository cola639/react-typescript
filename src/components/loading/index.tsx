import React from 'react'
import styled from 'styled-components'
// import {GlobalSpinner} from '@/components/common/GlobalSpinner'

interface LoadingProps {
    size?: string
    color?: string
}

export const Loading: React.FC<LoadingProps> = ({size, color}) => {
    // const theme = useTheme()
    // const spinnerColor = color || theme.colors.main.spinnerBase

    return (
        <SpinnerContainer>
            <div> LOADING！！！！！！！！！！！！！！！！！！！</div>
            {/* <GlobalSpinner size={size} color={spinnerColor} /> */}
        </SpinnerContainer>
    )
}

const SpinnerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
