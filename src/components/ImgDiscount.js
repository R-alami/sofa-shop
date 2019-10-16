import styled from 'styled-components'

const ImgDiscount = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${props=> props.src});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export default ImgDiscount
