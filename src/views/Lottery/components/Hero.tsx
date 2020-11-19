import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Progress } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`

const ProgressWrapper = styled.div`
  display: block;
  width: 100%;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <LeftWrapper>
          <Title>{TranslateString(0, 'The CAKE Lottery')}</Title>
          <Blurb>{TranslateString(0, 'Buy tickets with CAKE')}</Blurb>
          <Blurb>{TranslateString(0, 'Win if 2, 3, or 4 of your ticket numbers match!')}</Blurb>
        </LeftWrapper>
        <RightWrapper>
          <ProgressWrapper>
            <Progress step={10} />
          </ProgressWrapper>
        </RightWrapper>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero