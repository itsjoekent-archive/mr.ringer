import styled, { css, keyframes } from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useEffect, useRef, useState } from 'react';
import { Vector2 as MathVector2 } from 'mr.ringer';
import lessons from './lessons';

// Referenced from, https://jaketrent.com/post/render-codemirror-on-server/
let modeLoaded = false;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript');
  modeLoaded = true;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-height: 90vh;
  margin-top: 48px;
  margin-bottom: 48px;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-top: 2px solid ${({ theme }) => theme.colors.complimentary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.complimentary};
  position: relative;

  @media (min-width: 1280px) {
    height: 90vh;
  }

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
  width: 50%;
  max-height: 200px;
  overflow-y: scroll;

  @media (min-width: 1280px) {
    width: 20%;
    max-height: none;
  }
`;

const LessonsColumnHeader = styled.h2`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
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
  width: 50%;
  padding: 16px;
  position: relative;

  @media (min-width: 1280px) {
    width: 40%;
  }
`;

const errorMessageEntrance = keyframes`
  0% {
    bottom: -100%;
    opacity: 0;
  }

  100% {
    bottom: 16px;
    opacity: 1;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 16px;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.complimentary};
  background-color: ${({ theme }) => theme.colors.lightComplimentary};
  animation: 0.5s linear forwards ${errorMessageEntrance};
`;

const ChartCanvas = styled.canvas``;

const CodeColumn = styled.div`
  width: 100%;
  padding: 16px;
  height: 100%;

  @media (min-width: 1280px) {
    width: 40%;
    height: 100%;

    .code-mirror-override,
    .code-mirror-override .CodeMirror {
      height: 100%;
    }
  }
`;

export default function Sandbox() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [script, setScript] = useState(lessons[0].script);
  const [scriptError, setScriptError] = useState(null);

  const lessonsColumnRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setScript(activeLesson.script);
  }, [activeLesson]);

  useEffect(() => {
    function runScript() {
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;
      const ctx = canvasRef.current.getContext('2d');

      const Vector2 = MathVector2;

      function grid(dimension, minX, minY, maxX, maxY) {
        console.log('grid', dimension, minX, minY, maxX, maxY);
      }

      function lineColor(color) {
        console.log('lineColor', color);
      }

      function arrow(fromX, fromY, toX, toY) {
        console.log('arrow', fromX, fromY, toX, toY);
      }

      try {
        eval(script);
        setScriptError(null);
      } catch (error) {
        console.error(error);
        setScriptError(error.message);
      }
    }

    if (!canvasRef.current || !script) {
      return;
    }

    runScript();
  }, [canvasRef.current, script]);

  const codeMirrorOptions = {
    theme: 'nord',
    lineNumbers: true,
    lineWrapping: true,
  };

  if (modeLoaded) {
    codeMirrorOptions.mode = 'javascript';
  }

  return (
    <Container>
      <LessonsColumn ref={lessonsColumnRef}>
        <LessonsColumnHeader>Lessons</LessonsColumnHeader>
        <LessonsColumnSubheader>
          Click a lesson to learn more about the topic.
        </LessonsColumnSubheader>
        {lessons.map((item, index) => (
          <span key={item.id}>
            <LessonTitle
              isActive={activeLesson.id === item.id}
              onClick={() => setActiveLesson(item)}
            >
              {index + 1}. {item.title}
            </LessonTitle>
          </span>
        ))}
      </LessonsColumn>
      <ChartColumn>
        <ChartCanvas ref={canvasRef} />
        {scriptError && <ErrorMessage>{scriptError}</ErrorMessage>}
      </ChartColumn>
      <CodeColumn>
        <CodeMirror
          className="code-mirror-override"
          value={script}
          options={codeMirrorOptions}
          onBeforeChange={(editor, data, value) => setScript(value)}
        />
      </CodeColumn>
    </Container>
  );
}
