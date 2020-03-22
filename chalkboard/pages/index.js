import styled, { createGlobalStyle, css } from 'styled-components';
import Navigation from './Navigation';
import Section from './Section';
import useApplicationContext from './useApplicationContext';
import content from './content';

const PageBackground = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.primary};

    background-image: url(${process.env.ASSET_PREFIX}/chalk-noise.png);
    background-size: 1280px 720px;
    background-repeat: repeat;

    ${({ isChalkboardTheme }) =>
      isChalkboardTheme &&
      css`
        cursor: url(${process.env.ASSET_PREFIX}/chalk-stick.svg), auto;
      `}
  }
`;

const layoutBreakpoint = css`
  min-width: 1024px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  @media (${layoutBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const NavColumn = styled.div`
  width: 100%;
  margin-bottom: 48px;

  @media (${layoutBreakpoint}) {
    width: calc(25% - 24px);
    margin-bottom: 0;
  }
`;

const MainColumn = styled(NavColumn)`
  @media (${layoutBreakpoint}) {
    width: calc(75% - 48px);
  }
`;

export default function Home(props) {
  const { isChalkboardTheme, setChalkboardTheme } = useApplicationContext();

  return (
    <React.Fragment>
      <PageBackground isChalkboardTheme={isChalkboardTheme} />
      <PageLayout>
        <NavColumn>
          <Navigation />
        </NavColumn>
        <MainColumn>
          {content.sections.map((section) => (
            <Section {...section} key={section.id} />
          ))}
        </MainColumn>
      </PageLayout>
    </React.Fragment>
  );
}
