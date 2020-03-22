import styled from 'styled-components';
import Toggle from 'react-toggle';
import useApplicationContext from './useApplicationContext';
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
  color: ${({ theme }) => theme.colors.light};
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
    ${chalkUnderlineStyle}
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  .nav-theme-toggle.react-toggle {
    .react-toggle-thumb {
      border-color: ${({ theme }) => theme.colors.complimentary};
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
    }

    .react-toggle-track {
      width: 25px;
      height: 12px;
      background-color: ${({ theme }) => theme.colors.darkMono};
    }
  }

  .nav-theme-toggle.react-toggle--focus {
    .react-toggle-thumb {
      box-shadow: 0 0 2px 3px ${({ theme }) => theme.colors.complimentary};
    }
  }

  .nav-theme-toggle.react-toggle--checked {
    .react-toggle-track {
      background-color: ${({ theme }) => theme.colors.lightMono};
    }

    .react-toggle-thumb {
      left: auto;
      right: 0;
    }
  }
`;

const ToggleLabel = styled.label`
  ${({ theme }) => theme.terminalFont}
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.terminalLetterSpacing};
  line-height: ${({ theme }) => theme.terminalLineHeight};
  color: ${({ theme }) => theme.colors.light};
  margin-left: 12px;
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
  const { isChalkboardTheme, setChalkboardTheme } = useApplicationContext();

  const toggleLabelCopy = isChalkboardTheme
    ? 'Use more legible theme'
    : 'Use fun chalkboard theme';

  function onToggle(event) {
    const {
      target: { checked },
    } = event;
    setChalkboardTheme(!checked);
  }

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
      <ToggleContainer>
        <Toggle
          id="theme-toggle"
          defaultChecked={!isChalkboardTheme}
          onChange={onToggle}
          icons={false}
          className="nav-theme-toggle"
        />
        <ToggleLabel htmlFor="theme-toggle">{toggleLabelCopy}</ToggleLabel>
      </ToggleContainer>
      <LinksContainer>
        <li>
          <Link>Overview</Link>
        </li>
        <li>
          <Link>Vector2</Link>
        </li>
        <li>
          <Link>Vector3</Link>
        </li>
      </LinksContainer>
    </NavigationContainer>
  );
}
