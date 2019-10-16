import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import SeeLink from './SeeLink';


const DiscountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const DiscountTitle = props => (
    <DiscountWrapper>
        <Title>Discount</Title>
        <SeeLink>
            See All
        </SeeLink>
    </DiscountWrapper>
)

export default DiscountTitle