import styled from 'styled-components';
import content from './content';
import { chalkUnderlineStyle } from './sharedStyles';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.chalkFont}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.chalkLetterSpacing};
  line-height: ${({ theme }) => theme.chalkLineHeight};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.complimentary};
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
`;

const SubtitleLink = styled(Subtitle)`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.complimentary};
  }
`;

const Link = styled.a`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    ${chalkUnderlineStyle}
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;

  li:last-of-type ${Link} {
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    position: sticky;
    top: 128px;
  }
`;

export default function Navigation() {
  return (
    <NavigationContainer>
      <TitleContainer>
        <Title>mr. ringer</Title>
        <Subtitle>
          A Javascript Math library created by{' '}
          <SubtitleLink as="a" href="https://joekent.nyc/">
            @itsjoekent
          </SubtitleLink>
        </Subtitle>
      </TitleContainer>
      <LinksContainer>
        {content.sections.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`}>{section.title}</Link>
          </li>
        ))}
      </LinksContainer>
    </NavigationContainer>
  );
}
