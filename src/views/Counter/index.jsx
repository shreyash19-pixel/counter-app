import React from 'react'
import { Container, CounterWrap, IncBtn } from '../../styles/Counter'

const Counter = () => {
  return (
    <Container>
        <CounterWrap>
            <IncBtn>
                -
            </IncBtn>
            <IncBtn>
                0
            </IncBtn>
            <IncBtn>
                +
            </IncBtn>
        </CounterWrap>
    </Container>
  )
}

export default Counter