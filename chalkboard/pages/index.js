import styled, { createGlobalStyle, css } from 'styled-components';
import Navigation from '../src/Navigation';
import Documetation from '../src/Documentation';
import content from '../src/content';

const PageBackground = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.dark};

    background-image: url(${process.env.ASSET_PREFIX}/chalk-noise.png);
    background-size: 1280px 720px;
    background-repeat: repeat;
  }
`;

const layoutBreakpoint = `min-width: 1024px`;

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
  return (
    <React.Fragment>
      <PageBackground />
      <PageLayout>
        <NavColumn>
          <Navigation />
        </NavColumn>
        <MainColumn>
          <Documetation />
        </MainColumn>
      </PageLayout>
    </React.Fragment>
  );
}
