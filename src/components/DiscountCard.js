import React from 'react'
import styled from 'styled-components'
import ImgDiscount from './ImgDiscount';
import ShopCardFooter from './ShopCardFooter';
import ShopCardTitle from './ShopCardTitle';
import IconShop from './IconShop';
import TypeSofa from './TypeSofa';

const DiscountCardWrapper = styled.div`
    font-family: 'Poppins', 'sans-serif';
    width:40%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const DiscountCard = props => (
    <DiscountCardWrapper>
        <ImgDiscount src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d84a3602de71e606deb222b5fc9c254d&auto=format&fit=crop&w=500&q=60" />

    <div>
        <ShopCardFooter>
            <ShopCardTitle>Hyerim armrest sofa</ShopCardTitle>
            <IconShop>🛒</IconShop>
        </ShopCardFooter>
        <TypeSofa>
            Single sofa
        </TypeSofa>
    </div>

    </DiscountCardWrapper>
)

export default DiscountCard