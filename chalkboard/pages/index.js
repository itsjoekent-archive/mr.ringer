import styled, { createGlobalStyle, css } from 'styled-components';
import Documetation from '../src/Documentation';
import Navigation from '../src/Navigation';
import Sandbox from '../src/Sandbox';
import content from '../src/content';

const PageBackground = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  body {
    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.dark};

    background-image: url(${process.env.ASSET_PREFIX}/chalk-noise.png);
    background-size: 1280px 720px;
    background-repeat: repeat;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  margin-top: 48px;

  @media (min-width: 1024px) {
    margin-top: 48px;
  }
`;

export default function Home(props) {
  return (
    <React.Fragment>
      <PageBackground />
      <PageLayout>
        <Navigation />
        <Documetation markup={content.preMarkup} />
        <Sandbox />
        <Documetation markup={content.postMarkup} />
      </PageLayout>
    </React.Fragment>
  );
}
