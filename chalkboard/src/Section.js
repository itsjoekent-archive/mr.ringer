import styled from 'styled-components';
import marksy from 'marksy';
import { createElement } from 'react';
import { chalkUnderlineStyle } from './sharedStyles';

const TerminalContainer = styled.div`
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-left: 16px;
  word-break: break-word;
`;

const TerminalLine = styled.p`
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightComplimentary};
  line-height: 1.1;
  margin-bottom: 4px;
`;

const TerminalLineBreak = styled.span`
  display: block;
  width: 100%;
  height: calc((${({ theme }) => theme.fontSizes.body} * 1.1) + 4px);
`;

export default function Section(props) {
  const { id, title, composition } = props;

  return (
    <SectionContainer>
      <Title id={id}>{title}</Title>
      {composition &&
        composition.map(({ type, content }) => {
          const key = JSON.stringify(content);

          if (type === 'markdown') {
            return (
              <React.Fragment key={key}>
                {compileMarkdown(content).tree}
              </React.Fragment>
            );
          }

          if (type === 'terminal') {
            return (
              <TerminalContainer key={key}>
                {content.map((line, index) =>
                  line.length ? (
                    <TerminalLine key={index}>{line}</TerminalLine>
                  ) : (
                    <TerminalLineBreak key={index} />
                  )
                )}
              </TerminalContainer>
            );
          }

          return null;
        })}
    </SectionContainer>
  );
}
