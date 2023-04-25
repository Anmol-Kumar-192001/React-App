import React from 'react'

import styled from '@emotion/styled'

// const Button = styled.button`
//   color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
// `

const Button = styled.button(props => (
    {
        color: props.primary ? 'hotpink' : 'turquoise'
    }
))

const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
}))

const Basic = ({ className }) => {
    console.log("classname is", className);
    return (
        <div className={className}>Some text</div>)
}

const Fancy = styled(Basic)`
  color: hotpink;
`

export default function Main() {
    return (
        <>
            <Container column>
                <Button>This is a regular button.</Button>
                <Button primary>This is a primary button.</Button>
                <Fancy />
            </Container>
        </>
    )
}
