import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import content from './content';
import makeId from './makeId';
import { chalkUnderlineStyle } from './sharedStyles';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    position: sticky;
    top: 48px;
  }
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

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.complimentary};
    `}

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.complimentary : theme.colors.lightComplimentary};
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
`;

const Sublink = styled.a`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 6px;

  &:hover {
    color: ${({ theme }) => theme.colors.lightComplimentary};
  }
`;

const SublinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 8px;
  height: ${({ isActive }) => (isActive ? 'auto' : '0px')};
  margin-bottom: ${({ isActive }) => (isActive ? '12px' : '0px')};
  overflow-y: hidden;

  li:last-of-type ${Sublink} {
    margin-bottom: 0;
  }
`;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(content.sections[0].id);

  useEffect(() => {
    const { hash } = window.location;

    if (hash) {
      setActiveSection(makeId(hash.replace('#', '').trim().split('---')[0]));

      setTimeout(() => {
        document.querySelector(hash).scrollIntoView();
      }, 50);
    }
  }, []);

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
            <Link
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              isActive={section.id === activeSection}
            >
              {section.title}
            </Link>
            {!!section.subSections && !!section.subSections.length && (
              <SublinksContainer isActive={section.id === activeSection}>
                {section.subSections.map((subSection) => (
                  <Sublink
                    key={subSection.id}
                    href={`#${section.id}---${subSection.id}`}
                  >
                    {subSection.title}
                  </Sublink>
                ))}
              </SublinksContainer>
            )}
          </li>
        ))}
      </LinksContainer>
    </NavigationContainer>
  );
}
