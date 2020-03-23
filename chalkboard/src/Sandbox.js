import styled, { css, keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 90vh;
  margin-top: 48px;
  margin-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-top: 2px solid ${({ theme }) => theme.colors.complimentary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.complimentary};
  position: relative;

  &:before {
    content: 'Mr. Ringer TI-84';
    ${({ theme }) => theme.chalkFont}
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: 700;
    font-style: italic;
    letter-spacing: ${({ theme }) => theme.chalkLetterSpacing};
    line-height: ${({ theme }) => theme.chalkLineHeight};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.complimentary};
    background-color: ${({ theme }) => theme.colors.dark};
    border: 2px solid ${({ theme }) => theme.colors.complimentary};
    border-radius: 4px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -0.65em;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const LessonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 0 0 50%;

  @media (min-width: 1280px) {
    flex: 0 0 20%;
  }
`;

const LessonsColumnHeader = styled.h2`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.complimentary};
  margin-bottom: 12px;
`;

const LessonsColumnSubheader = styled.p`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-bottom: 24px;
`;

const lessonTitleHoverFrames = (theme) => keyframes`
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
`;

const LessonTitle = styled.button`
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.lightComplimentary};
  border: none;
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
  background: none;
  cursor: pointer;
  text-align: left;
  position: relative;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.complimentary};
    `}

  &:hover:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, ${({ theme }) =>
      theme.colors.lightComplimentary}, ${({ theme }) =>
  theme.colors.complimentary});
    background-size: 200% 500%;
    animation: 1s linear 0s infinite alternate ${({ theme }) =>
      lessonTitleHoverFrames(theme)};
  }
`;

const ChartColumn = styled.div`
  flex: 0 0 50%;
  padding: 16px;

  @media (min-width: 1280px) {
    flex: 0 0 40%;
  }
`;

const ChartCanvas = styled.canvas``;

const CodeColumn = styled.div`
  flex: 0 0 100%;
  padding: 16px;

  @media (min-width: 1280px) {
    flex: 0 0 40%;
  }
`;

export default function Sandbox() {
  return (
    <Container>
      <LessonsColumn>
        <LessonsColumnHeader>Lessons</LessonsColumnHeader>
        <LessonsColumnSubheader>
          Click a lesson to learn more about the topic
        </LessonsColumnSubheader>
        <span>
          <LessonTitle isActive>Adding vectors</LessonTitle>
        </span>
        <span>
          <LessonTitle>Subtracting vectors</LessonTitle>
        </span>
        <span>
          <LessonTitle>Scaling vectors</LessonTitle>
        </span>
        <span>
          <LessonTitle>Multiplying vectors</LessonTitle>
        </span>
      </LessonsColumn>
      <ChartColumn>
        <ChartCanvas />
      </ChartColumn>
      <CodeColumn />
    </Container>
  );
}
