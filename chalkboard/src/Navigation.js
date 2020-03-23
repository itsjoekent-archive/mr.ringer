import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

const NavigationTitle = styled.h1`
  ${({ theme }) => theme.chalkFont}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.chalkLetterSpacing};
  line-height: ${({ theme }) => theme.chalkLineHeight};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.complimentary};
  margin-right: 6px;
`;

const NavigationSubtitle = styled.p`
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
`;

const NavigationSubtitleLink = styled(NavigationSubtitle)`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.complimentary};
  }
`;

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationTitle>mr. ringer</NavigationTitle>
      <NavigationSubtitle>
        JS Math library created by{' '}
        <NavigationSubtitleLink as="a" href="https://joekent.nyc/">
          @itsjoekent
        </NavigationSubtitleLink>
      </NavigationSubtitle>
    </NavigationContainer>
  );
}
