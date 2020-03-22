import styled from 'styled-components';
import marksy from 'marksy';
import { createElement } from 'react';
import { chalkUnderlineStyle } from './sharedStyles';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const SectionParagraph = styled.p`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-bottom: 12px;
`;

const SectionAnchor = styled.a`
  display: inline-block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.lightComplimentary};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    ${chalkUnderlineStyle}
  }
`;

const compileMarkdown = marksy({
  createElement,
  elements: {
    p: SectionParagraph,
    a: SectionAnchor,
  },
});

const Title = styled.h2`
  display: block;
  ${({ theme }) => theme.font}
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 36px;
`;

const TerminalContainer = styled.div`
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.complimentary};
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
                {content.map((line) =>
                  line.length ? (
                    <TerminalLine>{line}</TerminalLine>
                  ) : (
                    <TerminalLineBreak />
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
