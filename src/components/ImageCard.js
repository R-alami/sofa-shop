import React from 'react';
import styled from 'styled-components';
import HeadLine from './HeadLine';
import SubLine from './SubLine';
import PrimaryButton from './Button';


const ImageCardWrapper = styled.div`
    width: 100%;
    height: 450px;
    padding: 16px;
    border-radius: 10px;
    background-image: url(${props => props.src});
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    background-size: cover;
    color: white;
`

const ImageCard = props => (
    <ImageCardWrapper src={props.src}>
        <SubLine> keith & phelps </ SubLine>
        <HeadLine>
            Dress up life in a
            way you can't imagine
        </HeadLine>
        <PrimaryButton to={props.to}>
            browser now
        </PrimaryButton>
    </ImageCardWrapper>
)

export default ImageCard