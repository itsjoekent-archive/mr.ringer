import styled, { css, keyframes, withTheme } from 'styled-components';
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 48px;
  margin-bottom: 48px;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-top: 2px solid ${({ theme }) => theme.colors.complimentary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.complimentary};
  position: relative;

  @media (min-width: 1080px) {
    height: 90vh;
    max-height: 600px;
    flex-direction: row;
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
    white-space: nowrap;
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
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;

  @media (min-width: 1080px) {
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
  width: 100%;
  padding: 16px;
  position: relative;

  @media (min-width: 1080px) {
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

function Sandbox(props) {
  const { theme } = props;

  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [script, setScript] = useState(lessons[0].script);
  const [scriptError, setScriptError] = useState(null);

  const canvasColumnRef = useRef(null);
  const canvasRef = useRef(null);

  const [dimensions, setDimensions] = useState([0, 0]);

  useEffect(() => {
    setScript(activeLesson.script);
  }, [activeLesson]);

  useEffect(() => {
    function runScript() {
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;
      const ctx = canvasRef.current.getContext('2d');

      const Vector2 = MathVector2;

      let gridDimension = '2d';
      let gridLength = 100;

      function gridPixelsPerUnit() {
        return {
          wideUnit: canvasWidth / 2 / gridLength,
          tallUnit: canvasHeight / 2 / gridLength,
        };
      }

      function getPoint(x, y) {
        if (gridDimension === '2d') {
          const { tallUnit, wideUnit } = gridPixelsPerUnit();

          const canvasX = x * wideUnit + canvasWidth / 2;
          const canvasY = canvasHeight - y * tallUnit - canvasHeight / 2;

          return { x: canvasX, y: canvasY };
        }
      }

      function lineStyle(
        color = theme.colors.light,
        width = 1,
        cap = 'round',
        join = 'round'
      ) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = cap;
        ctx.lineJoin = join;
      }

      function grid(dimension, length) {
        gridDimension = dimension;
        gridLength = length;

        if (dimension === '2d') {
          const frequency = Math.round(gridLength / 10);

          ctx.beginPath();
          lineStyle('#2f2f2f', 1, 'square');

          for (let xRow = -gridLength; xRow < gridLength; xRow += frequency) {
            for (let yRow = -gridLength; yRow < gridLength; yRow += frequency) {
              if (
                xRow === -gridLength ||
                yRow === -gridLength ||
                xRow === gridLength ||
                yRow === gridLength
              ) {
                continue;
              }

              const xGridLine = [
                getPoint(yRow, -gridLength),
                getPoint(yRow, gridLength),
              ];

              const yGridLine = [
                getPoint(-gridLength, xRow),
                getPoint(gridLength, xRow),
              ];

              ctx.moveTo(xGridLine[0].x, xGridLine[0].y);
              ctx.lineTo(xGridLine[1].x, xGridLine[1].y);

              ctx.moveTo(yGridLine[0].x, yGridLine[0].y);
              ctx.lineTo(yGridLine[1].x, yGridLine[1].y);

              ctx.stroke();
            }
          }

          ctx.closePath();

          const labelFrequency = Math.round(gridLength / 5);

          for (
            let xRow = -gridLength;
            xRow < gridLength;
            xRow += labelFrequency
          ) {
            for (
              let yRow = -gridLength;
              yRow < gridLength;
              yRow += labelFrequency
            ) {
              if (
                xRow === -gridLength ||
                yRow === -gridLength ||
                xRow === gridLength ||
                yRow === gridLength ||
                xRow === 0 ||
                yRow === 0
              ) {
                continue;
              }

              const xLabel = getPoint(xRow, 0);
              const yLabel = getPoint(0, yRow);

              ctx.font = '12px monospace';
              ctx.fillStyle = theme.colors.light;

              const xRowTextMetrics = ctx.measureText(xRow);

              ctx.fillText(
                xRow,
                xLabel.x - xRowTextMetrics.width / 2,
                xLabel.y + xRowTextMetrics.actualBoundingBoxAscent + 4
              );
              ctx.fillText(
                yRow,
                yLabel.x + 4,
                yLabel.y + xRowTextMetrics.actualBoundingBoxAscent / 2
              );
            }
          }

          lineStyle(theme.colors.light, 2, 'square');

          const origin = getPoint(0, 0);
          const top = getPoint(0, gridLength);
          const bottom = getPoint(0, -gridLength);
          const left = getPoint(-gridLength, 0);
          const right = getPoint(gridLength, 0);

          ctx.beginPath();
          ctx.moveTo(top.x, top.y);
          ctx.lineTo(bottom.x, bottom.y);
          ctx.moveTo(left.x, left.y);
          ctx.lineTo(right.x, right.y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      function arrow(fromX, fromY, toX, toY) {
        const from = getPoint(fromX, fromY);
        const to = getPoint(toX, toY);

        const { wideUnit } = gridPixelsPerUnit();
        const headLength = wideUnit * (gridLength * 0.0025);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);

        const distance = [toX - fromX, toY - fromY];
        const angle = Math.atan2(...distance);

        const headPoints = [
          getPoint(
            toX - headLength * Math.cos(angle - Math.PI / 6),
            toY - headLength * Math.sin(angle - Math.PI / 6)
          ),
          getPoint(
            toX - headLength * Math.cos(angle + Math.PI / 6),
            toY - headLength * Math.sin(angle + Math.PI / 6)
          ),
        ];

        ctx.lineTo(headPoints[0].x, headPoints[0].y);
        ctx.moveTo(to.x, to.y);
        ctx.lineTo(headPoints[1].x, headPoints[1].y);

        ctx.stroke();
        ctx.closePath();
      }

      function line(fromX, fromY, toX, toY) {
        const from = getPoint(fromX, fromY);
        const to = getPoint(toX, toY);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
        ctx.closePath();
      }

      try {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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
  }, [canvasRef.current, script, ...dimensions]);

  useEffect(() => {
    if (!canvasRef.current || !canvasColumnRef.current) {
      return;
    }

    function resizeCanvas() {
      canvasRef.current.width =
        canvasColumnRef.current.getBoundingClientRect().width - 16;
      canvasRef.current.height =
        canvasColumnRef.current.getBoundingClientRect().height - 32;
      setDimensions([canvasRef.current.width, canvasRef.current.height]);
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [canvasRef.current, canvasColumnRef.current]);

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
      <LessonsColumn>
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
      <ChartColumn ref={canvasColumnRef}>
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

export default withTheme(Sandbox);
